import React from 'react';

const VendorProfile = () => {
  return (
    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
      {/* Card body */}
      <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
        <div className="flex flex-wrap mb-6 xl:flex-nowrap">
          <div className="mb-5 mr-5">
            <div className="relative inline-block shrink-0 rounded-2xl">
              <img
                className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                src="data:image/jpeg;base64,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"
                alt="Vendor"
              />
              <div className="group/tooltip relative">
                <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2 border border-white"></span>
                <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
                  Status: Active
                </span>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="flex flex-wrap items-start justify-between mb-2">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <a
                    className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                    href="#"
                  >
                 Ramesh Agrawal
                  </a>
                </div>
                <div className="flex flex-wrap pr-2 mb-4 font-medium">
                  <a
                    className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                    href="#"
                  >
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Jalna , Maharashtra
                  </a>
                  <a
                    className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                    href="mailto:contact@example.com"
                  >
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </span>
                    vishwaslandge2004@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap my-auto">
                <button className="inline-block px-6 py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark">
                  Follow
                </button>
                <button className="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark">
                  Contact
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-wrap items-center">
                <button className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                  320 Products
                </button>
                <button className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                  2.5k Customers
                </button>
                <button className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                  48 Deals
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-px border-neutral-200" />
        <ul className="group flex flex-wrap items-stretch text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments">
          <li className="flex mt-2 -mb-[2px]">
            <button className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary">
              Summary
            </button>
          </li>
          <li className="flex mt-2 -mb-[2px]">
            <button className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary">
              Products
            </button>
          </li>
          <li className="flex mt-2 -mb-[2px]">
            <button className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-marketing]:border-primary group-[.active-marketing]:text-primary text-muted hover:border-primary">
              Customers
            </button>
          </li>
          <li className="flex mt-2 -mb-[2px] group">
            <button className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-followers]:border-primary group-[.active-followers]:text-primary text-muted hover:border-primary">
              History
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendorProfile;
