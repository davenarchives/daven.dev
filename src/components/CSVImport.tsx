"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";
import { FileUp, Table as TableIcon, LayoutGrid, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CSVImport() {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name);
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.data.length > 0) {
            setHeaders(Object.keys(results.data[0] as object));
            setData(results.data);
          }
        },
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    maxFiles: 1
  });

  const clearData = () => {
    setData([]);
    setHeaders([]);
    setFileName(null);
  };

  return (
    <section id="projects" className="py-24 relative bg-surface-hover/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            DATA <span className="text-brand-cyan">SHOWCASE.</span>
          </h2>
          <p className="text-foreground/70 font-mono">Upload a CSV dataset to visualize experimental logs.</p>
        </motion.div>

        {!fileName ? (
          <div {...getRootProps()} className="focus:outline-none">
            <motion.div
              className={cn(
                "border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors glass",
                isDragActive ? "border-brand-cyan bg-brand-cyan/5" : "border-white/20 hover:border-brand-orange/50"
              )}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <input {...getInputProps()} />
              <FileUp className={cn("w-12 h-12 mx-auto mb-4", isDragActive ? "text-brand-cyan" : "text-foreground/50")} />
              <p className="font-mono text-lg mb-2">
                {isDragActive ? "Drop the CSV here..." : "Drag & drop a CSV file here"}
              </p>
              <p className="text-sm text-foreground/50 font-mono">or click to select file</p>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-4 rounded-xl border border-white/10 shadow-lg">
              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-brand-cyan">{fileName}</span>
                <span className="text-sm text-foreground/50 font-mono">{data.length} rows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex bg-surface-hover p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode("table")}
                    className={cn("p-2 rounded-md transition-colors", viewMode === "table" ? "bg-surface shadow text-brand-orange" : "text-foreground/50")}
                  >
                    <TableIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("cards")}
                    className={cn("p-2 rounded-md transition-colors", viewMode === "cards" ? "bg-surface shadow text-brand-orange" : "text-foreground/50")}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={clearData}
                  className="p-2 text-foreground/50 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {viewMode === "table" ? (
                <motion.div
                  key="table"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="overflow-x-auto rounded-xl border border-white/10 glass max-h-[600px] overflow-y-auto"
                >
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-surface-hover/50 text-foreground/70 sticky top-0 z-10 font-mono">
                      <tr>
                        {headers.map((header) => (
                          <th key={header} className="px-6 py-4">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          {headers.map((header) => (
                            <td key={`${i}-${header}`} className="px-6 py-4 font-mono text-foreground/80 whitespace-nowrap">
                              {row[header]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              ) : (
                <motion.div
                  key="cards"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {data.slice(0, 50).map((row, i) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      key={i}
                      className="glass p-6 rounded-xl border border-white/10"
                    >
                      {headers.map((header) => (
                        <div key={header} className="mb-2 last:mb-0 flex flex-col">
                          <span className="text-[10px] uppercase font-mono text-brand-cyan/70 tracking-wider">{header}</span>
                          <span className="font-mono text-sm truncate">{row[header]}</span>
                        </div>
                      ))}
                    </motion.div>
                  ))}
                  {data.length > 50 && (
                    <div className="col-span-full text-center py-4 text-sm font-mono text-foreground/50">
                      Showing first 50 items for card view performance.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
