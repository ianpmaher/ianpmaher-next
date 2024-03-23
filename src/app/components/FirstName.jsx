"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FirstName = (props) => {
    const [mounted, setMounted] = useState(false);
    // animation for OUTLINE
   
    const zeroAnimation = {
        hidden: { pathLength: 0, opacity: 0.5 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { duration: 1.25, delay: 0 }, opacity: { duration: 0.5 } },
        },
    };
    const oneAnimation = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { duration: 1.25, delay: 0.25 }, opacity: { duration: 0.5 } },
        },
    };
    const twoAnimation = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { duration: 1.25, delay: 0.5 }, opacity: { duration: 0.5, delay: 0.5 } },
        },
    };
    const threeAnimation = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.25, delay: .75 },
                opacity: { duration: 0.5, delay: 0.75 },
                // fill: { duration: 0.5, delay: 2 },
            },
        },
    };
    const fourAnimation = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.25, delay: 1 },
                opacity: { duration: 0.5, delay: 1 },
                // fill: { duration: 0.5, delay: 2 },
            },
        },
    };
    const fiveAnimation = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.25, delay: 1.25 },
                opacity: { duration: 0.5, delay: 1.25 },
                // fill: { duration: 0.5, delay: 2 },
            },
        },
    };

    // useEffect to set mounted to true
    // this is to avoid hydration mismatch // but results in a flash of unstyled content
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex flex-row justify-center items-center my-0 mx-auto">
            <div className="flex justify-center my-0 mx-auto min-h-10 max-h-40 min-w-10 max-w-50 ">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    className=""
                    viewBox="0 0 285 47"
                    fill="transparent"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* i */}
                    <motion.path
                        variants={zeroAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill={{}}
                        clipRule="evenodd"
                        d="M2.19995 46.12C1.17995 46.12 0.699951 45.58 0.699951 44.92C0.699951 42.58 4.71995 44.08 4.71995 40.06V9.52001C4.71995 5.50001 0.699951 6.94001 0.699951 4.60001C0.699951 4.00001 1.17995 3.40001 2.25995 3.40001C3.63995 3.40001 5.37995 3.58001 7.65995 3.58001C9.93995 3.58001 11.86 3.40001 13.18 3.40001C14.26 3.40001 14.68 4.00001 14.68 4.60001C14.68 6.94001 10.72 5.50001 10.72 9.52001V40.06C10.72 44.08 14.68 42.58 14.68 44.92C14.68 45.58 14.26 46.12 13.18 46.12C11.86 46.12 9.93995 45.94 7.65995 45.94C5.37995 45.94 3.57995 46.12 2.19995 46.12Z"
                    ></motion.path>
                    {/* a */}
                    <motion.path
                        variants={oneAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M49.5057 42.64C50.1657 42.76 50.4657 43.06 50.4657 43.54C50.4657 44.68 48.1857 46.48 45.3657 46.48C42.9057 46.48 40.7457 45.04 39.8457 41.92C37.5057 44.68 33.6057 46.66 28.8657 46.66C22.6857 46.66 18.6657 43 18.6657 37.72C18.6657 32.5 23.2257 28.3 30.8457 28.3C33.4857 28.3 35.7657 28.78 37.9857 29.44L37.8657 28.66C36.9657 22.06 34.6257 20.02 30.7257 20.02C27.9657 20.02 25.5057 21.46 23.3457 23.44C22.7457 23.92 22.2657 24.16 21.8457 24.16C21.2457 24.16 20.6457 23.68 20.6457 22.9C20.6457 22.3 21.0057 21.76 21.6057 21.04C23.5857 18.28 27.9657 15.88 32.4657 15.88C40.2057 15.88 42.1257 21.16 42.9657 26.98L44.4657 37.06C45.0657 41.56 46.3857 42.04 49.5057 42.64ZM30.6657 43.06C34.2057 43.06 37.5057 40.9 39.2457 38.5L38.4057 32.56C36.3657 31.78 34.1457 31.36 32.0457 31.36C27.0057 31.36 24.3657 33.64 24.3657 37.24C24.3657 40.66 26.9457 43.06 30.6657 43.06Z"
                    ></motion.path>
                    {/* n */}
                    <motion.path
                        variants={twoAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M80.4568 27.82L82.0168 38.92C82.7368 44.62 86.3968 42.58 86.3968 44.92C86.3968 45.76 85.6768 46.12 84.7168 46.12C83.1568 46.12 81.8968 45.94 79.4968 45.94C77.0368 45.94 75.9568 46.12 74.3368 46.12C73.2568 46.12 72.6568 45.64 72.6568 44.86C72.6568 42.7 76.6768 44.14 76.6768 40.42C76.6768 40 76.5568 39.28 76.4968 38.62L75.0568 28.6C74.5768 25.48 73.4968 20.44 68.7568 20.44C65.1568 20.44 61.2568 23.38 61.2568 29.5V39.52C61.2568 44.38 65.1568 42.64 65.1568 44.92C65.1568 45.46 64.7368 46.12 63.8368 46.12C62.5168 46.12 60.7168 45.94 58.5568 45.94C56.4568 45.94 54.7768 46.12 53.5168 46.12C52.4968 46.12 52.0768 45.46 52.0768 44.92C52.0768 42.64 55.8568 44.38 55.8568 39.52V24.94C55.8568 21.28 51.5968 23.32 51.5968 20.98C51.5968 20.02 52.6768 19.3 55.7968 17.8C58.8568 16.3 59.5168 16.12 59.9968 16.12C60.9568 16.12 61.2568 16.96 61.2568 18.28V21.76C63.1768 18.64 66.2968 15.88 70.9168 15.88C78.0568 15.88 79.7968 22.9 80.4568 27.82Z"
                    ></motion.path>
                    {/* m */}
                    <motion.path
                        variants={twoAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M147.802 11.5L152.602 40.54C153.082 43.3 157.102 42.7 157.102 44.86C157.102 45.7 156.382 46.12 155.302 46.12C154.342 46.12 152.902 45.94 150.322 45.94C147.922 45.94 146.002 46.12 144.442 46.12C143.302 46.12 142.642 45.7 142.642 44.86C142.642 42.94 146.542 43.36 146.542 41.32C146.542 40.66 146.422 40.06 146.302 39.28L142.282 14.32L131.302 41.2C130.882 42.22 130.102 42.52 129.322 42.52C128.482 42.52 127.822 42.22 127.342 41.2L114.742 14.02L110.902 39.28C110.782 40.12 110.662 40.66 110.662 41.32C110.662 43.36 114.502 42.94 114.502 44.86C114.502 45.7 113.902 46.12 112.702 46.12C111.442 46.12 109.882 45.94 108.022 45.94C106.282 45.94 104.842 46.12 103.702 46.12C102.802 46.12 102.082 45.7 102.082 44.86C102.082 42.76 106.222 43.3 106.702 40.48L111.382 11.5C111.562 10.48 111.562 9.34001 111.562 8.68001C111.562 5.92001 108.142 6.76001 108.142 4.60001C108.142 4.00001 108.682 3.40001 109.882 3.40001C111.142 3.40001 113.122 3.58001 115.222 3.58001C117.382 3.58001 119.182 3.40001 120.562 3.40001C121.642 3.40001 122.182 4.00001 122.182 4.66001C122.182 6.82001 119.002 6.04001 119.002 8.62001C119.002 9.52001 119.722 10.96 120.682 13.12L130.462 34.36L139.102 13.12C139.942 11.02 140.422 9.58001 140.422 8.62001C140.422 5.74001 137.002 6.88001 137.002 4.66001C137.002 4.00001 137.602 3.40001 138.562 3.40001C140.002 3.40001 141.862 3.58001 144.082 3.58001C146.122 3.58001 147.982 3.40001 149.302 3.40001C150.382 3.40001 150.922 4.00001 150.922 4.60001C150.922 6.76001 147.382 5.92001 147.382 8.44001C147.382 9.10001 147.562 10.24 147.802 11.5Z"
                    ></motion.path>
                    {/* a */}
                    <motion.path
                        variants={threeAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M190.541 42.64C191.201 42.76 191.501 43.06 191.501 43.54C191.501 44.68 189.221 46.48 186.401 46.48C183.941 46.48 181.781 45.04 180.881 41.92C178.541 44.68 174.641 46.66 169.901 46.66C163.721 46.66 159.701 43 159.701 37.72C159.701 32.5 164.261 28.3 171.881 28.3C174.521 28.3 176.801 28.78 179.021 29.44L178.901 28.66C178.001 22.06 175.661 20.02 171.761 20.02C169.001 20.02 166.541 21.46 164.381 23.44C163.781 23.92 163.301 24.16 162.881 24.16C162.281 24.16 161.681 23.68 161.681 22.9C161.681 22.3 162.041 21.76 162.641 21.04C164.621 18.28 169.001 15.88 173.501 15.88C181.241 15.88 183.161 21.16 184.001 26.98L185.501 37.06C186.101 41.56 187.421 42.04 190.541 42.64ZM171.701 43.06C175.241 43.06 178.541 40.9 180.281 38.5L179.441 32.56C177.401 31.78 175.181 31.36 173.081 31.36C168.041 31.36 165.401 33.64 165.401 37.24C165.401 40.66 167.981 43.06 171.701 43.06Z"
                    ></motion.path>
                    {/* h */}
                    <motion.path
                        variants={threeAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M220.892 27.82L222.392 38.92C223.172 44.56 226.772 42.58 226.772 44.98C226.772 45.76 226.052 46.12 225.152 46.12C223.532 46.12 222.332 45.94 219.932 45.94C217.412 45.94 216.392 46.12 214.772 46.12C213.692 46.12 213.032 45.58 213.032 44.86C213.032 42.7 217.052 44.14 217.052 40.48C217.052 40 216.992 39.4 216.932 38.92L215.492 28.6C215.012 25.48 213.872 20.44 209.192 20.44C205.592 20.44 201.692 23.38 201.692 29.5V39.52C201.692 44.38 205.532 42.64 205.532 44.92C205.532 45.46 205.172 46.12 204.272 46.12C202.952 46.12 201.152 45.94 198.992 45.94C196.892 45.94 195.212 46.12 193.892 46.12C192.932 46.12 192.512 45.46 192.512 44.92C192.512 42.64 196.292 44.38 196.292 39.52V9.64001C196.292 5.98001 192.032 8.02001 192.032 5.68001C192.032 4.72001 193.052 4.00001 196.232 2.50001C199.292 1.00001 199.892 0.820007 200.552 0.820007C201.392 0.820007 201.692 1.60001 201.692 2.38001V21.76C203.612 18.64 206.732 15.88 211.292 15.88C218.552 15.88 220.232 22.9 220.892 27.82Z"
                    ></motion.path>
                    {/* e */}
                    <motion.path
                        variants={fourAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M255.791 38.14C256.451 38.14 256.991 38.74 256.991 39.46C256.991 39.82 256.811 40.3 256.391 40.96C254.231 44.08 248.891 46.78 243.671 46.78C235.511 46.78 228.731 41.14 228.731 31.36C228.731 22.18 235.631 15.76 243.491 15.76C250.811 15.76 255.791 21.34 255.791 27.1C255.791 28.36 255.431 28.72 254.531 29.02L235.331 34.72C236.951 39.34 240.791 42.7 245.651 42.7C249.251 42.7 252.131 41.08 254.231 39.04C254.951 38.44 255.311 38.14 255.791 38.14ZM242.711 19.24C237.971 19.24 234.371 23.26 234.371 29.2C234.371 30.04 234.431 30.88 234.551 31.66L248.411 27.4C249.491 27.1 249.791 26.8 249.791 25.72C249.791 22.9 246.971 19.24 242.711 19.24Z"
                    ></motion.path>
                    {/* r */}
                    <motion.path
                        variants={fiveAnimation}
                        className="stroke-paper-text dark:stroke-dracula-text"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                        fill="transparent"
                        clipRule="evenodd"
                        d="M280.588 15.88C283.108 15.88 284.848 17.14 284.848 18.64C284.848 19.6 284.488 21.1 283.768 23.68C283.468 24.7 282.988 25.36 282.148 25.36C281.368 25.36 281.008 24.64 280.648 23.68C279.868 21.82 279.088 20.92 277.828 20.92C274.948 20.92 269.968 25.48 269.968 33.88V39.52C269.968 44.38 274.648 42.46 274.648 44.92C274.648 45.46 274.228 46.12 273.328 46.12C271.828 46.12 269.728 45.94 267.268 45.94C265.168 45.94 263.488 46.12 262.228 46.12C261.208 46.12 260.788 45.46 260.788 44.92C260.788 42.64 264.568 44.38 264.568 39.52V24.94C264.568 21.28 260.308 23.32 260.308 20.98C260.308 20.02 261.388 19.3 264.508 17.8C267.568 16.3 268.228 16.12 268.708 16.12C269.668 16.12 269.968 16.96 269.968 18.28V24.34C271.948 19.24 276.328 15.88 280.588 15.88Z"
                    ></motion.path>
                    {/* r */}
                </motion.svg>
            </div>
        </div>
    );
};

export default FirstName;
