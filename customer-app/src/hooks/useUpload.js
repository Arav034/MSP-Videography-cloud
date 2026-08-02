import { useContext } from "react";
import { UploadContext } from "@/context/UploadContext";

export function useUpload() {
  const ctx = useContext(UploadContext);
  if (!ctx) {
    throw new Error("useUpload must be used within an UploadProvider");
  }
  return ctx;
}