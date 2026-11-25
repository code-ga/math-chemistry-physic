import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
          <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl sm:leading-[3.5rem]">
            Welcome to the Math Chemistry Physics Project!
          </h1>
          <p className="max-w-[85ch] text-center text-lg leading-7 text-gray-700 dark:text-gray-200">
            This project is designed to help you visualize and analyze mathematical, chemical, and physical concepts through interactive graphs and simulations. Explore the resources below to learn more about how to use the project effectively.
            We hope you find this project useful and informative! . Try to let you know the other aspects of the project and its features. You can find more information about the project and its features in the following resources:
          </p>
        </header>
        <div className="w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Table of Contents for the project. You can find more information about the project and its features in the following resources:
            </p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "/math/graph-part1",
    text: "How computer plot your graphs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M12 20.25C16.9706 20.25 21 16.2206 21 11.25C21 6.27944 16.9706 2.25 12 2.25C7.02944 2.25 3 6.27944 3 11.25C3 16.2206 7.02944 20.25 12 20.25Z"
          strokeWidth="1.5"
        />
        <path
          d="M12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "How computer retrieval from your points to plot your graph",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M12 20.25C16.9706 20.25 21 16.2206 21 11.25C21 6.27944 16.9706 2.25 12 2.25C7.02944 2.25 3 6.27944 3 11.25C3 16.2206 7.02944 20.25 12 20.25Z"
          strokeWidth="1.5"
        />
        <path
          d="M12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
