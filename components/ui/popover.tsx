/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { useRef, useState, useEffect, useId } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

import { TextMorph } from "./text-morph";

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};
const serviceld = "service_0efghjn";
const templateld = "template_es3eduu";
const publickey = "eSp5yfHbvdYqVyPDK";

export default function Popover() {
  const uniqueId = useId();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState(""); // Updated: manage email input
  const [error, setError] = useState(""); // Updated: manage validation errors
  const [text, setText] = useState("WaitList");
  const templateParams = {
    from_email: email,
  };
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setEmail("");
    setError("");
  };

  useClickOutside(formContainerRef, () => {
    closeMenu();
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Revert text back to "WaitList" after a delay when it's "Applied"
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (text === "Applied") {
      timer = setTimeout(() => {
        setText("WaitList");
      }, 3000); // Change back after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [text]);

  // Email validation function
  const validateEmail = (email: string) => {
    // Simple regex for email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    emailjs
      .send(serviceld, templateld, templateParams, publickey)
      .then((response: any) => {
        toast.success("You have been added to the waitlist!");
        closeMenu();
        setText("Applied");
        console.log("Email sent successfully!", response);
        setEmail("");
      })
      .catch((error: any) => {
        console.error("Error submitting email:", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <MotionConfig transition={TRANSITION}>
      <div className="relative flex items-center mt-4">
        <motion.button
          key="button"
          disabled={false}
          layoutId={`popover-${uniqueId}`}
          className="flex h-9 items-center border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50"
          style={{
            borderRadius: 8,
          }}
          onClick={openMenu}
        >
          <motion.span
            layoutId={`popover-label-${uniqueId}`}
            className="text-sm"
          >
            <TextMorph>{text}</TextMorph>
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={formContainerRef}
              layoutId={`popover-${uniqueId}`}
              className="absolute h-auto w-[334px] overflow-hidden border border-zinc-950/10 bg-white outline-none dark:bg-zinc-700"
              style={{
                borderRadius: 12,
              }}
            >
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none"
                  autoFocus
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
                {error && <p className="px-4 text-sm text-red-500">{error}</p>}
                <div key="close" className="flex justify-between px-4 py-3">
                  <button
                    type="button"
                    className="flex items-center"
                    onClick={closeMenu}
                    aria-label="Close popover"
                  >
                    <ArrowLeftIcon
                      size={16}
                      className="text-zinc-900 dark:text-zinc-100"
                    />
                  </button>
                  <button
                    className="relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800"
                    type="submit"
                    aria-label="Submit email"
                  >
                    Submit Email
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
