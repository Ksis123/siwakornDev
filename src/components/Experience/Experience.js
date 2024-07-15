import React from "react";
import { useTranslation } from "react-i18next";

// import certifies from "../../static/media/Internship_Certification_Siwakorn.pdf";
const Experience = (changeLanguage) => {
  const { t } = useTranslation();

  return (
    <div className="justify-center">
      <div className="px-4 sm:px-6">
        <h3 className="text-lg md:text-xl lg:text-2xl leading-4 font-bold ">
          {t("exp_title")}
        </h3>
      </div>
      <div className="mx-1 mt-3 mb-6 lg:mx-8 ">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border  bg-slate-300 group-[.is-active]:bg-light-secondary opacity-100 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border  shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-light-primary">{t("exp1")}</div>
                <time className="font-medium text-sm lg:text-base text-gray-400">
                  {t("exp_time1")}
                </time>
              </div>
              <div className="opacity-80">
                {t("company1")} <br />
                {t("lo1")}
                <hr /> <br />
                {t("des1")} <br />
                {/* <a
                  className="px-2 rounded-[10px] w-1/2 border-2 sm:w-[100px] justify-center bg-light-primary duration-500 hover:border-dark-primary hover:bg-[#ffffff2f] hover:text-dark-secondary"
                  href={certifies}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-file-pdf"></i> Cooperative
                </a> */}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border  bg-slate-300 group-[.is-active]:bg-light-secondary opacity-100 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border  shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-light-primary">{t("exp2")}</div>
                <time className="font-medium text-sm lg:text-base text-gray-400">
                  {t("exp_time2")}
                </time>
              </div>
              <div className="opacity-80">
                {t("lo2")}
                <hr /> <br />
                {t("des2")}
                <br />
                {t("des2_1")} <br />
                {t("des2_2")}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border  bg-slate-300 group-[.is-active]:bg-light-secondary opacity-100 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" />
              </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border  shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-light-primary">{t("exp3")}</div>
                <time className="font-medium text-sm lg:text-base text-gray-400">
                  {t("exp_time3")}
                </time>
              </div>
              <div className="opacity-80">
                {t("lo3")} <hr />
                <br />
                {t("des3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;



