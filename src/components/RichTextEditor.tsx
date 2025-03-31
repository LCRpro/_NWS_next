"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function RichTextEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert p-2 min-h-[150px] outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getText()); // ✅ getText au lieu de getHTML
    },
  });

  return (
    <div className="border border-gray-600 bg-zinc-900 text-white rounded">
      <EditorContent editor={editor} />
    </div>
  );
}
