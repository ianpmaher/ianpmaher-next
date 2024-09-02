"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cat = (props) => {
  const [mounted, setMounted] = useState(false);
  // animation for OUTLINE
  const outlineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 5, delay: 0 }, opacity: { duration: 0.5 } },
    },
  };
  // animation for KITTY FACE
  const faceAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 5, delay: 2 }, opacity: { duration: 0.5, delay: 2 } },
    },
  };

  // useEffect to set mounted to true
  // this is to avoid hydration mismatch // but results in a flash of unstyled content
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex justify-center my-0 mx-auto min-h-10 max-h-40 min-w-10 max-w-40 ">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="80%"
        height="50%"
        viewBox="0 0 608 765"
        fill="transparent"
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.path
          variants={outlineAnimation}
          className="stroke-emerald-900 dark:stroke-dracula-orange"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="evenodd"
          fill="transparent"
          clipRule="evenodd"
          d="M200.961 15.454C204.792 6.88604 209.422 2.85904 218.147 0.508047C227.399 -1.98596 242.187 4.65904 264.647 21.401C271.998 26.881 291.18 45.27 295.458 50.939C296.912 52.866 298.202 53.623 299.385 53.244C300.354 52.934 303.847 51.724 307.147 50.555C310.447 49.386 313.822 48.272 314.647 48.079C315.472 47.886 318.847 47.009 322.147 46.131C331.788 43.564 337.159 43.066 354.647 43.116C369.288 43.158 372.443 43.482 382.647 45.993C388.972 47.549 396.967 49.941 400.414 51.309L406.681 53.795L408.914 50.932C420.24 36.41 447.764 13.278 464.385 4.31204C471.235 0.617046 472.784 0.177047 479.108 0.126047C484.778 0.0800463 487.162 0.572046 491.161 2.61104C496.702 5.43604 501.907 12.107 503.665 18.637C504.77 22.738 504.509 161.469 503.387 166.928C499.059 187.987 495.298 200.19 488.977 213.682L484.474 223.294L486.083 228.182C486.968 230.87 488.092 233.969 488.58 235.069C494.244 247.837 505.866 281.934 507.157 289.569C507.482 291.494 508.385 296.219 509.162 300.069C509.94 303.919 511.04 309.994 511.606 313.569C512.172 317.144 512.878 321.194 513.176 322.569C514.144 327.052 513.696 364.874 512.583 372.569C511.414 380.651 508.58 398.435 508.2 400.069C508.073 400.619 507.616 402.869 507.185 405.069C506.156 410.32 502.369 424.369 499.737 432.698C497.774 438.907 493.72 449.648 481.479 481.069C474.09 500.036 469.443 516.057 466.688 532.069C466.12 535.369 465.179 540.094 464.596 542.569C462.822 550.109 462.49 588.606 464.097 600.355C464.871 606.012 465.769 611.862 466.092 613.355C466.416 614.848 466.852 616.969 467.061 618.069C468.021 623.121 471.061 632.901 474.44 641.809C474.579 642.176 474.713 642.531 474.843 642.873L474.863 642.928C476.674 647.719 477.599 650.166 479.163 650.685C480.796 651.227 483.126 649.668 487.888 646.483L487.935 646.451L487.958 646.435C488.279 646.221 488.61 646 488.952 645.771C495.969 641.088 504.243 632.799 508.087 626.603C510.642 622.483 514.312 612.619 515.186 607.517C515.581 605.213 514.86 600.121 513.132 593.017C507.964 571.767 509.545 561.134 519.124 552.724C525.944 546.735 530.192 545.231 540.147 545.278C560.971 545.378 577.928 556.949 588.201 578.069C594.46 590.935 595.977 598.236 595.859 614.928C595.714 635.623 591.131 653.034 581.255 670.413C572.849 685.204 558.477 701.467 545.538 710.828C543.123 712.576 540.922 714.251 540.647 714.552C539.023 716.328 521.229 726.359 511.536 730.964C476.461 747.626 425.013 759.123 365.647 763.565C348.481 764.849 257.333 764.875 240.147 763.6C232.997 763.069 223.493 762.393 219.026 762.096C207.791 761.349 192.241 759.145 169.147 755.026C167.497 754.731 165.395 754.264 164.477 753.988C162.749 753.467 159.963 752.83 155.647 751.966C145.923 750.021 124.595 743.035 109.647 736.899C64.9212 718.539 30.5472 685.886 14.3182 646.344C10.5422 637.142 5.8132 623.217 5.0662 619.097C4.7992 617.622 3.6532 612.737 2.5202 608.242C0.772202 601.308 0.406203 596.203 0.103203 574.569C-0.274797 547.588 0.137204 543.32 5.6542 517.069C9.1652 500.363 17.8422 476.262 26.9112 458.03C43.6342 424.408 56.5972 406.802 87.2052 376.146C101.621 361.708 106.634 357.315 130.147 338.513C140.047 330.596 148.643 323.658 149.249 323.094C149.855 322.53 152.531 320.269 155.195 318.069C162.766 311.818 175.617 298.933 184.118 289.069C196.145 275.114 207.499 254.402 215.113 232.528C215.273 232.07 215.426 231.632 215.572 231.214L215.574 231.21C217.12 226.787 217.914 224.518 217.828 222.283C217.737 219.928 216.668 217.61 214.475 212.851C214.352 212.584 214.225 212.309 214.094 212.025L213.855 211.505C209.442 201.898 205.16 188.535 201.985 174.464L199.189 162.069L198.871 91.454L198.553 20.839L200.961 15.454ZM228.477 168.909C226.411 159.506 226.296 156.148 225.889 93.235L225.463 27.4L227.71 28.603C231.649 30.711 246.92 41.829 253.647 47.486C262.709 55.107 268.867 61.363 279.564 73.819C286.334 81.702 289.411 84.569 291.1 84.569C293.286 84.569 297.403 83.15 304.197 80.054C321.845 72.014 347.478 67.372 362.211 69.548C376.205 71.614 388.142 75.123 404.793 82.067C409.191 83.901 412.294 84.624 413.968 84.203C415.498 83.819 420.15 79.355 425.733 72.916C435.037 62.184 441.696 55.564 453.647 45.167C460.802 38.942 475.715 28.569 477.509 28.569C478.893 28.569 479.03 129.073 477.676 151.069C476.422 171.447 472.491 186.062 463.151 205.069C456.517 218.57 450.158 227.201 437.713 239.596C427.933 249.336 419.124 255.774 407.628 261.58C401.982 264.433 390.151 268.995 385.647 270.057C384.822 270.251 381.447 271.176 378.147 272.111C374.128 273.25 366.842 273.974 356.082 274.303C341.349 274.754 339.047 274.578 328.334 272.174C301.466 266.147 282.947 256.179 265.147 238.162C245.876 218.656 234.818 197.774 228.477 168.909ZM225.429 275.431C227.605 271.382 231.114 263.906 233.227 258.819C235.339 253.732 237.239 249.569 237.45 249.569C237.66 249.569 242.124 253.841 247.371 259.061C262.254 273.872 283.247 287.138 300.493 292.632C304.153 293.798 308.947 295.354 311.147 296.09C313.347 296.826 317.622 297.916 320.647 298.513C323.672 299.109 327.272 299.862 328.647 300.186C330.022 300.51 339.247 301.004 349.147 301.284C363.486 301.69 368.978 301.449 376.147 300.103C410.328 293.685 437.133 279.676 459.347 256.623L464.595 251.177L468.647 259.947C476.304 276.52 482.626 299.618 485.787 322.569C487.648 336.085 487.367 365.655 485.259 378.069C482.831 392.367 477.983 412.449 474.154 424.069C470.857 434.076 469.095 438.736 456.948 469.569C448.292 491.541 442.307 512.982 438.623 535.217C435.863 551.872 435.599 555.467 435.687 575.291C435.745 588.646 436.31 600.163 437.146 605.069C437.895 609.469 438.714 614.419 438.965 616.069C440.595 626.799 447.207 649.319 452.049 660.632C452.6 661.92 450.712 662.667 441.308 664.882C435.033 666.36 429.463 667.569 428.932 667.569C425.17 667.569 413.524 634.614 411.085 617.069C410.703 614.319 410.215 611.169 410.002 610.069C407.677 598.09 407.275 560.579 409.236 538.569C409.886 531.282 414.353 507.857 416.77 499.069C417.828 495.219 418.867 491.394 419.079 490.569C420.021 486.896 424.81 473.36 426.734 468.935C432.343 456.032 432.659 450.114 428.034 444.616C422.716 438.297 412.288 438.404 407.409 444.827C403.927 449.413 393.496 478.732 391.138 490.565C390.973 491.392 389.884 495.786 388.719 500.329C386.607 508.56 383.405 527.764 381.925 541.069C380.449 554.345 381.15 602.054 382.998 614.069C386.425 636.36 389.034 646.508 395.127 661.249C397.132 666.1 399.007 670.799 399.293 671.691C399.826 673.352 399.35 673.427 371.108 676.134L366.07 676.617L364.799 670.843C354.745 625.182 353.713 612.63 353.613 534.898C353.55 486.601 353.24 472.539 352.107 466.644C351.322 462.56 350.485 457.61 350.247 455.644C350.009 453.678 349.557 450.944 349.241 449.569C348.926 448.194 348.468 445.944 348.224 444.569C340.328 400.089 317.975 355.253 289.316 326.406C273.213 310.197 251.046 295.397 231.147 287.567C226.747 285.836 222.77 284.054 222.309 283.607C221.849 283.16 223.252 279.481 225.429 275.431ZM150.147 357.602C175.36 336.801 180.879 331.848 192.804 319.319C198.955 312.857 204.623 307.569 205.399 307.569C210.447 307.569 232.559 317.269 243.647 324.346C255.372 331.83 272.841 347.51 281.78 358.573C299.778 380.847 317.245 419.462 321.13 445.569C321.335 446.944 322.498 453.469 323.715 460.069C325.797 471.361 325.973 476.083 326.712 540.069C327.143 577.469 327.941 612.119 328.484 617.069C329.027 622.019 330.005 631.244 330.656 637.569C331.307 643.894 331.99 649.313 332.174 649.612C332.359 649.911 333.674 657.049 335.099 665.475C336.523 673.901 338.466 683.497 339.418 686.8C341.741 694.867 346.827 700.667 353.034 702.327C358.528 703.797 371.658 703.939 381.856 702.64C385.866 702.13 393.422 701.2 398.647 700.574C420.06 698.009 440.303 693.587 461.647 686.811C469.622 684.279 476.629 682.116 477.218 682.003C480.054 681.461 493.989 674.841 500.97 670.719C533.755 651.363 548.903 617.748 539.676 584.832C537.233 576.117 537.151 573.973 539.229 573.176C548.022 569.802 564.485 585.997 567.685 601.169C570.105 612.645 570.063 614.756 567.043 633.389C563.98 652.288 544.402 678.439 521.449 694.29C501.599 707.998 464.969 722.156 436.647 727.066C434.722 727.399 430.222 728.295 426.647 729.056C420.48 730.368 417.043 730.894 406.647 732.116C404.172 732.407 399.222 733.07 395.647 733.588C372.093 737.006 360.926 737.428 301.647 737.138C247.903 736.875 236.823 736.479 212.147 733.936C205.415 733.243 204.76 733.159 199.147 732.272C196.947 731.925 192.923 731.375 190.204 731.05C186.191 730.571 171.598 727.759 158.873 725.012C148.179 722.704 121.819 713.145 110.147 707.342C87.8372 696.252 65.5412 677.795 52.5152 659.634C41.1582 643.8 32.8562 623.635 29.0262 602.582C26.8462 590.6 26.0952 564.027 27.5942 551.925C28.2662 546.504 29.0402 540.269 29.3142 538.069C29.9202 533.21 34.1142 514.49 36.5952 505.569C43.4272 481.001 63.2062 444.142 81.0662 422.697C98.2572 402.054 112.255 388.865 150.147 357.602ZM163.647 509.746C163.647 507.782 188.079 498.635 197.147 497.205C202.655 496.336 221.053 497.406 228.986 499.056C237.751 500.879 252.469 507.005 259.511 511.761C280.094 525.66 294.145 547.059 301.273 575.355L304.716 589.024L304.431 639.547L304.147 690.069L301.845 693.74C300.578 695.759 297.878 698.684 295.845 700.24L292.147 703.069H257.647C224.719 703.069 215.479 702.618 207.647 700.631C197.396 698.029 192.378 696.419 187.344 694.116C184.281 692.715 181.542 691.569 181.257 691.569C180.972 691.569 176.937 689.382 172.292 686.708C144.952 670.977 126.617 645.264 120.138 613.569C117.845 602.352 118.514 580.666 121.502 569.371C125.95 552.556 132.473 539.603 142.362 527.946C147.776 521.565 160.578 510.569 162.594 510.569C163.173 510.569 163.647 510.199 163.647 509.746ZM146.121 590.569C147.35 557.555 170.281 529.155 199.39 524.597C213.277 522.423 231.564 526.003 242.147 532.968C258.731 543.882 269.837 560.128 275.032 581.069C278.008 593.066 278.647 603.331 278.647 639.141V675.569L251.397 675.561C236.409 675.557 221.251 675.084 217.711 674.51C210.763 673.382 196.306 668.831 190.647 665.991C179.39 660.339 166.101 648.442 158.696 637.387C154.532 631.17 149.1 618.908 148.114 613.499C146.074 602.304 145.801 599.166 146.121 590.569Z"
        ></motion.path>
        <motion.path
          variants={faceAnimation}
          className="stroke-emerald-900 dark:stroke-dracula-orange fill:emerald-900 dark:fill-dracula-orange"
          fillOpacity={0.9}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="evenodd"
          fill="transparent"
          clipRule="evenodd"
          d="M290.626 136.688C276.702 144.645 281.619 166.569 297.327 166.569C306.038 166.569 311.249 162.476 313.585 153.798C314.568 150.15 314.459 148.944 312.819 145.307C309.73 138.459 305.717 135.369 299.439 135.007C295.524 134.781 293.181 135.228 290.626 136.688ZM397.55 137.046C389.185 142.531 388.011 156.158 395.331 162.783C402.461 169.236 415.055 167.635 419.385 159.727C422.76 153.562 422.874 149.359 419.828 143.426C415.333 134.671 405.476 131.848 397.55 137.046ZM126.964 140.85C115.892 144.223 114.504 160.418 124.89 165.046C126.681 165.844 131.297 167.694 135.147 169.156C138.997 170.618 144.924 173.078 148.318 174.623C160.288 180.07 165.422 180.214 171.116 175.263C177.7 169.538 176.856 159.881 169.267 154.093C167.447 152.705 165.629 151.569 165.226 151.569C164.605 151.569 156.484 148.292 144.147 143.063C136.832 139.963 131.944 139.333 126.964 140.85ZM563.147 140.259C559.827 140.661 548.725 145.818 538.513 151.7C533.45 154.617 531.401 156.488 529.86 159.604C526.532 166.329 528.918 173.897 535.329 176.954C540.491 179.416 544.209 178.928 552.531 174.697C556.72 172.567 562.622 169.778 565.647 168.499C573.573 165.148 576.402 162.776 578.251 157.936C582.03 148.042 574.23 138.914 563.147 140.259ZM346.249 184.261C342.027 184.945 335.937 189.107 334.175 192.514C330.545 199.534 333.663 207.158 341.897 211.395C346.299 213.66 346.647 214.117 346.647 217.633C346.647 222.13 348.727 224.569 352.563 224.569C356.391 224.569 358.647 221.724 358.647 216.899C358.647 213.12 358.868 212.819 362.439 211.75C373.343 208.483 375.969 195.796 367.399 187.792C366.057 186.539 363.877 185.235 362.554 184.894C359.291 184.054 349.809 183.685 346.249 184.261ZM126.647 199.479C110.243 202.94 95.2912 209.548 90.9322 215.262C85.7342 222.077 87.7772 231.841 95.1582 235.455C100.046 237.849 104.791 237.151 112.857 232.851C124.057 226.881 128.983 225.467 140.725 224.854C150.242 224.357 152.282 224.58 161.057 227.069C172.367 230.278 176.134 229.802 181.189 224.526C183.634 221.973 184.147 220.598 184.147 216.596C184.147 207.753 176.978 202.001 162.647 199.346C152.522 197.47 135.877 197.532 126.647 199.479ZM537.147 199.775C534.947 200.297 532.472 200.987 531.647 201.31C530.822 201.632 529.922 201.944 529.647 202.002C529.372 202.06 527.642 202.999 525.802 204.088C517.879 208.779 516.575 219.664 523.234 225.512C527.593 229.339 534.917 230.032 540.497 227.146C541.988 226.375 546.794 225.45 551.177 225.091C561.176 224.27 571.079 226.641 582.151 232.507C590.041 236.688 594.952 237.544 600.011 235.621C603.462 234.309 607.647 227.828 607.647 223.797C607.647 219.256 604.448 213.506 600.465 210.887C596.769 208.457 582.525 202.609 578.647 201.929C577.272 201.688 575.395 201.264 574.477 200.988C569.553 199.506 567.023 199.259 554.647 199.052C547.222 198.929 539.347 199.254 537.147 199.775Z"
        ></motion.path>
      </motion.svg>
    </div>
  );
};

export default Cat;
