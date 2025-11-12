"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface PostModalProps {
  post: BlogPost;
  currentPage?: number;
}

export function PostModal({ post, currentPage }: PostModalProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleClose = () => {
    if (currentPage) {
      router.push(`/blog/page/${currentPage}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
          aria-label="Zamknij"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="p-8">
          <time className="text-sm text-gray-500">{formatDate(post.createdAt)}</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600">{post.description}</p>

          <div
            className="prose prose-lg mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleClose}
              className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-800"
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

