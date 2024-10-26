import { Email, Git, Inst, Linked, X } from "../../assets/icons/iconns";

const Follow = () => {
  return (
    <div>
      <ul>
        <li className="flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <X />

            <span>Follow on x</span>
          </a>
        </li>
        <li className="mt-4 flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <Inst />

            <span>Follow on instagram</span>
          </a>
        </li>
        <li className="mt-4 flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <Git />

            <span>Follow on Github</span>
          </a>
        </li>
        <li className="mt-4 flex">
          <a
            href=""
            className="group flex gap-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <Linked />

            <span>Follow on LinkedIn</span>
          </a>
        </li>
        <li className="mt-8 border-t border-zinc-100 pt-8 flex">
          <a
            href=""
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <Email />

            <span className="ml-4">muhirweleoconstantin@gamil.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Follow;
