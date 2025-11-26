import Chat from "./Components/Chat";
import RecentChats from "./Components/RecentChats";

export default function Home() {
  return (
    <div className="flex w-full">
      <RecentChats />
      <Chat />
      <div>Hello</div>
    </div>
  );
}
