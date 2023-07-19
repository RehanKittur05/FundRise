import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });
  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <span className="coverLine"> </span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight-text-white sm:text-5xl sm:leading-none">
                FundRise <br className="hidden md:block" />
                Crowd Funding FR
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                do re mei fa so la ti
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >
                Learn more
              </a>
            </div>
            <div className="w-full max-w-xl xl;px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Campaign
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }
                      placeholder="title"
                      required
                      text="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      description
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      placeholder="description"
                      required
                      text="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      TargetAmount
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })
                      }
                      placeholder="amount"
                      required
                      text="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Target Amount
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })
                      }
                      placeholder="Date"
                      required
                      type="date"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:nb-4">
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 round shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none newColor"
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Create your Campaign and raise funds
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
