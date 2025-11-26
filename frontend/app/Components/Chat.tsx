"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Chat = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [chatResponses, setChatResponses] = useState<
    {
      role: string;
      message: string;
    }[]
  >([]);
  return (
    <div className="w-full flex flex-col items-end justify-center p-4">
      <div className="w-full bg-gray-100 h-full">
        {chatResponses.map((e, id) => (
          <div key={id}>
            {e.role}: {e.message}
          </div>
        ))}
      </div>
      <div className="w-max mx-auto mt-4">
        <Input
          type="text"
          placeholder="enter the chat"
          className="w-[500px]"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button
          variant="default"
          className="bg-black text-white ml-1"
          onClick={() => {
            if (prompt.length == 0) {
              console.log("Enter some text");
              return;
            }
            setChatResponses([
              ...chatResponses,
              { role: "user", message: prompt },
            ]);
            setPrompt("");
            console.log(chatResponses);
          }}
        >
          Send
        </Button>
      </div>
      {/* <input type="text" /> */}
    </div>
  );
};
export default Chat;
