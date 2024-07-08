"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Waitlist() {
  const [email, setEmail] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    toast.loading("Subscribing...");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log("body:", JSON.stringify({ email }));

      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        toast.dismiss();
        toast.success("Subscribed successfully!");
        console.log("Subscribed successfully:", data);
        setEmail('');
      } else {
        toast.dismiss();
        toast.error(`Failed to subscribe: ${data.message}`);
        console.error("Subscription error:", data);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(`Failed to subscribe: ${error}`);
      console.error("Subscription error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-sm:flex max-sm:flex-col max-sm:w-5/6 bg-[#04061C] max-sm:bg-transparent max-sm:gap-[10px] rounded-[20px]">
      <div className="relative font-stolz font-bold flex max-sm:bg-[#04061C] flex-row justify-between items-center p-[2px_2px_2px_20px] gap-2.5 w-[450px] max-sm:w-full h-[70px] bg-[rgba(254,213,204,0.05)] border border-[#FF542F] shadow-[0px_10px_30px_rgba(255,84,47,0.5)] backdrop-blur-[5px] rounded-[20px] max-sm:left-[0px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white"
          placeholder="Enter your email"
          onFocus={(e) => {
            const parentNode = e.currentTarget.parentNode as HTMLElement | null;
            if (parentNode) {
              parentNode.classList.add(
                "bg-[rgba(254,213,204,0.1)]",
                "shadow-[0px_10px_50px_rgba(255,84,47,0.75)]"
              );
            }
          }}
          onBlur={(e) => {
            const parentNode = e.currentTarget.parentNode as HTMLElement | null;
            if (parentNode) {
              parentNode.classList.remove(
                "bg-[rgba(254,213,204,0.1)]",
                "shadow-[0px_10px_50px_rgba(255,84,47,0.75)]"
              );
            }
          }}
        />
        <button type="submit" className="bg-[#FF542F] max-sm:hidden text-white px-4 py-2 rounded-[18px] h-full shadow-inner shadow-white/50 hover:bg-[#FF2E00] hover:shadow-inset hover:shadow-white/50">
          Join the Waitlist!
        </button>
      </div>
      <button type="submit" className="bg-[#FF542F] sm:hidden text-white px-4 py-2 rounded-[18px] h-[70px] w-full shadow-inner shadow-white/50 hover:bg-[#FF2E00] hover:shadow-inset hover:shadow-white/50">
        Join the Waitlist!
      </button>
    </form>
  );
}

export default Waitlist;
