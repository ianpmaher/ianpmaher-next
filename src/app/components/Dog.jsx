"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Dog = (props) => {
    const { theme } = useTheme();
    let svgColor;
    const [mounted, setMounted] = useState(false);

    // useEffect to set mounted to true
    // this is to avoid hydration mismatch // but results in a flash of unstyled content
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    // ==================== //
    // before I knew Tailwind had svg color utilities
    // switch (theme) {
    //     case "dark":
    //         svgColor = "#F5F5F5";
    //         break;
    //     case "light":
    //         svgColor = "#000000";
    //         break;
    //     default:
    //         svgColor = "#F5F5F5";
    //         break;
    // }

    // const isDarkMode = theme === "dark";

    return (
        <div className="flex justify-center my-0 mx-auto min-h-10 max-h-40 min-w-10 max-w-40 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 495 456" fill="none">
                <path
                    className="fill-dracula-sub dark:fill-dracula-purple"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M383.755 1.02498C360.979 3.75498 340.026 18.818 329.818 39.802C326.713 46.182 325.109 51.504 322.884 62.802C316.831 93.542 310.528 105.932 292.225 123.073C273.414 140.689 250.23 149.713 212.89 153.951C173.154 158.462 152.744 163.959 133.423 175.353C111.051 188.547 100.792 200.429 82.652 234.158C63.562 269.652 40.353 294.939 12.676 310.397C1.47802 316.65 -1.24298 320.496 2.28202 325.087C5.99802 329.928 9.70702 329.516 21.829 322.92C42.682 311.572 61.344 294.352 77.28 271.751L83.5 262.93L84.684 274.215C88.501 310.589 82.445 335.962 65.054 356.457L60 362.413L60.01 392.457L60.02 422.5L62.576 427.993C63.982 431.014 66.198 434.882 67.5 436.588L69.866 439.691L50.829 440.299C29.238 440.988 26.976 441.651 27.032 447.273C27.067 450.879 28.438 453.108 31.684 454.837C33.323 455.709 81.199 456 223.299 456H412.73L415.365 453.927C418.777 451.244 419.053 445.264 415.897 442.405C414.011 440.696 411.798 440.466 394.397 440.174C378.127 439.9 375 439.61 375 438.374C375 433.132 368.926 428 362.724 428C359.073 428 356.281 425.613 354.191 420.703C353.311 418.636 353.009 401.538 353.034 355.203L353.068 292.5L361.093 287.113C379.542 274.729 392.999 253.649 397.887 229.475C399.62 220.906 399.995 213.934 400.546 180C401.252 136.497 401.951 130.161 407.242 119.308C411.467 110.644 419.693 101.787 426.697 98.36C431.714 95.905 433.824 95.535 445.916 94.988C463.132 94.21 468.812 91.99 477.955 82.468C485.396 74.72 489.049 67.246 492.546 52.622C495.478 40.362 495.369 34.925 492.128 31.684C490.095 29.65 483.81 28.812 452.599 26.409L444.697 25.801L437.809 18.503C430.366 10.619 421.792 5.35798 412 2.66898C404.932 0.727983 392.348 -0.00501749 383.755 1.02498ZM388.25 16.597C386.333 17.471 386.728 22.35 390.031 38.594C393.723 56.747 394.596 68.603 393.121 80.566C391.169 96.405 387.545 103.244 380.393 104.586C373.212 105.933 364.124 100.296 348.292 84.675C340.879 77.361 336.933 74.105 336.637 75.058C336.391 75.851 334.981 80.55 333.504 85.5C326.293 109.667 314.628 126.637 295.183 141.245C273.309 157.68 252.573 164.603 209 170.019C178.301 173.835 164.285 177.053 150.325 183.491C132.488 191.718 114.75 207.549 107.74 221.5C100.309 236.289 98.63 249.528 100.577 278C102.133 300.762 101.473 312.895 97.932 326.655C95.441 336.333 86.577 354.627 80.806 362L76.5 367.5L76 391.653C75.725 404.936 75.768 417.434 76.096 419.424C77.027 425.078 80.415 428 86.039 428C91.629 428 95.119 430.352 98.048 436.095C99.917 439.757 100.319 440 104.52 440C109.499 440 110.011 439.224 106.892 436.405C105.732 435.357 103.595 432.25 102.142 429.5L99.5 424.5L99.184 394.816C98.937 371.688 99.158 364.592 100.184 362.688C100.908 361.344 104.909 357.546 109.076 354.249C137.495 331.756 163.394 294.273 171.433 264C174.912 250.896 176.516 249.528 187.488 250.302C210.102 251.898 231.295 258.748 280.482 280.362C284.872 282.291 288.544 283.786 288.643 283.685C288.741 283.583 287.673 280.125 286.269 276C282.808 265.831 281.943 246.849 284.431 235.667C286.508 226.332 291.193 216.711 294.973 214.019C298.952 211.186 305.017 211.325 307.826 214.314C311.192 217.898 310.593 221.266 305.583 226.906C300.224 232.94 298.611 239.033 298.672 253C298.72 263.757 300.579 271.99 305.333 282.5L308.5 289.5L309.021 352C309.481 407.086 309.737 414.915 311.181 418C314.05 424.131 316.83 426.885 320.793 427.518C327.589 428.605 330.613 430.57 332.963 435.424L335.178 440H341.648C348.807 440 348.73 440.313 343.32 433.208C336.94 424.827 337 425.601 337 352.253C337 310.751 337.368 285.181 337.981 284.035C338.521 283.026 342.254 280.395 346.278 278.187C359.505 270.927 369.231 260.197 376.441 244.911C387.689 221.064 386.167 193.79 372.301 170.731C366.608 161.263 352.77 146.261 343.939 139.982C335.397 133.91 333 131.252 333 127.854C333 120.219 342.394 118.779 351.583 125.006C358.358 129.596 375.926 147.372 379.99 153.749C381.83 156.636 383.533 158.8 383.776 158.558C384.018 158.316 384.601 153.029 385.072 146.809C387.147 119.406 397.304 98.958 414.517 87.533C423.028 81.883 427.05 80.808 442.5 80.051C453.959 79.489 457.249 78.976 460.628 77.224C469.387 72.683 476.206 61.603 477.614 49.627L478.241 44.296L473.87 43.674C471.467 43.332 461.85 42.554 452.5 41.945C433.066 40.678 432.11 40.303 427.718 32.231C422.338 22.343 412.347 17.02 398 16.397C393.325 16.194 388.938 16.284 388.25 16.597ZM365.484 22.93C358.368 26.1 350.275 34.497 345.846 43.306L341.837 51.279L346.648 58.389C352.334 66.794 371.893 87 374.343 87C376.661 87 377.838 83.448 378.57 74.245C379.289 65.202 378.011 54.015 374.56 39.139C373.202 33.288 371.826 26.813 371.501 24.75C370.829 20.492 370.905 20.515 365.484 22.93ZM183.61 277.25C181.553 282.887 177.807 291.713 175.285 296.861C164.354 319.182 141.963 347.552 123.75 362.159L115 369.177L115.004 394.839C115.007 418.585 115.154 420.741 116.973 423.723C118.165 425.679 120.031 427.171 121.719 427.519C131.6 429.552 134.521 431.583 136.436 437.75L137.135 440H222.189C304.865 440 307.206 439.948 305.872 438.144C305.117 437.124 302.84 434.086 300.812 431.394C294.828 423.453 294.17 419.296 293.54 385.5C293.233 369 292.985 343.518 292.99 328.873L293 302.246L288.25 300.244C285.637 299.143 281.7 297.681 279.5 296.994C277.3 296.308 268.3 292.489 259.5 288.507C250.7 284.526 239 279.593 233.5 277.545C220.397 272.667 198.168 267 192.132 267H187.35L183.61 277.25Z"
                />
            </svg>
        </div>
    );
};

export default Dog;
