"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Laptop = (props) => {
    const { theme } = useTheme();
    // let svgColor;
    const [mounted, setMounted] = useState(false);

    // useEffect to set mounted to true
    // this is to avoid hydration mismatch // but results in a flash of unstyled content
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

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
        <div className="flex justify-center items-center my-0 mx-auto min-h-10 max-h-40 min-w-10 max-w-40 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="60%" viewBox="0 0 742 550" fill="none">
                <path
                    className="fill-sky-900 dark:fill-dracula-blue"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M117.724 0.556042C104.121 0.949664 102.602 1.1331 99.6811 2.7351C94.9861 5.30855 90.7649 9.53903 88.5169 13.9231L86.5326 17.7929V210.782V403.772L88.1493 406.88C89.0383 408.59 90.3015 410.446 90.9565 411.005C92.0066 411.903 91.7734 412.193 88.9685 413.483C87.2203 414.287 84.8594 415.86 83.7224 416.979C81.3972 419.265 66.6497 442.433 32.4604 497.511C20.1273 517.379 20.6679 515.996 20.945 526.958C21.164 535.653 21.3014 536.397 23.0363 538.33C24.0574 539.467 25.8954 540.856 27.1208 541.416C29.0769 542.311 27.608 542.439 15.0966 542.465C1.25738 542.494 -1.34857 542.927 0.547412 544.878C1.55073 545.911 740.458 545.833 741.46 544.801C743.431 542.773 740.411 542.358 725.605 542.616C713.492 542.827 711.032 542.703 712.782 541.969C715.39 540.876 719.445 536.299 720.067 533.746C720.314 532.733 720.398 528.183 720.254 523.633L719.992 515.362L713.766 505.426C710.342 499.961 705.308 491.878 702.58 487.464C690.426 467.804 671.435 437.479 666.68 430.141C659.542 419.123 656.37 415.364 652.82 413.717L649.787 412.309L651.626 410.334C656.086 405.542 655.772 420.601 655.772 211.6C655.772 21.3523 655.765 20.5077 654.262 16.3713C651.097 7.66876 643.71 1.88901 634.112 0.606494C628.308 -0.169286 144.394 -0.216681 117.724 0.556042ZM101.386 6.24025C96.839 8.45829 93.4117 12.0643 91.4051 16.7404C89.8916 20.267 89.8886 20.6529 89.8671 211.46C89.8485 378.975 89.9822 402.916 90.9476 404.837C92.5866 408.099 96.3377 411.033 98.8694 411.033H101.066L98.3971 408.622C96.9289 407.295 95.0775 404.897 94.2821 403.293C92.8592 400.422 92.8391 397.342 93.0263 210.171L93.2164 19.9658L95.4711 16.2046C96.9905 13.6694 99.0388 11.6325 101.751 9.95865L105.776 7.47462L370.934 7.49144C626.916 7.50749 636.195 7.55717 639.104 8.91612C642.812 10.6496 647.074 15.6398 648.226 19.5951C648.87 21.8078 649.088 70.2218 649.088 211.087C649.088 372.453 648.936 399.992 648.03 402.222C647.449 403.654 645.598 406.361 643.918 408.238L640.862 411.65L643.572 411.02C647.006 410.224 650.22 407.075 651.691 403.069C652.714 400.284 652.815 379.613 652.633 210.018L652.43 20.0858L650.823 16.5478C648.887 12.2829 645.15 8.28785 641.218 6.28C638.369 4.82474 633.734 4.79646 371.709 4.61455L105.099 4.42883L101.386 6.24025ZM368.118 9.51458C367.779 9.86388 308.408 10.3217 236.183 10.5319L104.864 10.914L102.011 13.2781C100.442 14.5782 98.4038 16.7817 97.4822 18.175L95.8068 20.708L95.9969 207.332L96.187 393.955L98.1877 396.654C99.2875 398.138 101.385 399.937 102.848 400.652C105.336 401.867 122.627 401.949 370.8 401.919C516.71 401.902 636.498 401.881 636.994 401.874C638.532 401.852 643.161 397.185 644.676 394.13C646.091 391.275 646.117 387.845 646.117 206.585C646.117 53.5017 645.946 21.5273 645.117 19.4881C643.926 16.5623 638.679 11.4888 636.296 10.9607C635.367 10.7543 576.123 10.4104 504.643 10.1964C433.163 9.98158 373.342 9.59789 371.708 9.34261C370.073 9.08733 368.458 9.16453 368.118 9.51458ZM369.415 10.8154C368.589 13.0297 369.431 14.7356 371.348 14.7356C372.905 14.7356 373.194 14.3756 373.194 12.4427C373.194 10.645 372.833 10.097 371.52 9.90514C370.538 9.76145 369.668 10.1383 369.415 10.8154ZM144.83 16.573C113.872 16.9812 110.051 17.1669 107.922 18.3653C104.563 20.2563 101.934 24.1268 101.015 28.5384C100.468 31.1646 100.29 86.5056 100.434 209.279L100.643 386.234L102.543 390.033C104.075 393.097 105.224 394.243 108.484 395.958L112.525 398.084L369.852 398.392C534.433 398.589 628.357 398.433 630.446 397.959C635.065 396.912 637.847 394.592 639.883 390.09L641.646 386.193L641.654 208.03C641.659 76.8561 641.439 29.1827 640.816 27.2696C639.528 23.312 636.712 19.868 633.263 18.0344L630.15 16.3797L523.58 16.3216C464.967 16.2902 406.316 16.3682 393.246 16.4951C380.175 16.6212 326.705 16.5883 274.422 16.4209C222.14 16.2543 163.824 16.3223 144.83 16.573ZM109.176 21.4234C107.826 22.3696 106.022 24.1153 105.167 25.303L103.613 27.463L103.732 207.377L103.85 387.29L105.465 389.625C106.354 390.909 108.473 392.712 110.174 393.631L113.268 395.303L371.635 395.157C513.737 395.078 630.704 394.794 631.561 394.528C632.419 394.261 633.904 393.308 634.862 392.41C638.951 388.579 638.691 401.152 638.679 207.572L638.666 28.4933L637.008 25.5155C636.095 23.8776 634.184 21.9003 632.761 21.1207C630.256 19.7488 621.947 19.7037 370.902 19.7037H111.631L109.176 21.4234ZM95.8157 398.286C95.8157 401.566 99.3106 405.953 103.772 408.274C105.963 409.413 127.917 409.499 371.868 409.319L637.577 409.122L640.15 407.567C642.725 406.009 644.732 403.155 645.773 399.568C646.295 397.774 646.191 397.809 644.057 400.154C642.808 401.526 640.599 403.16 639.148 403.784C636.833 404.78 604.054 404.918 370.966 404.918C147.265 404.918 105.037 404.753 102.977 403.867C101.632 403.289 99.471 401.49 98.1736 399.871C96.4922 397.771 95.8157 397.317 95.8157 398.286ZM93.4986 415.66C87.117 416.729 87.9703 415.599 60.0342 459.949C25.4848 514.797 24.2601 516.871 25.2701 518.812C25.6994 519.638 27.1267 520.919 28.4427 521.66C30.687 522.923 37.0396 523.017 131.959 523.207L233.084 523.409L232.33 521.296C231.806 519.829 231.826 518.522 232.395 517.02C233.529 514.025 235.062 514.849 235.062 518.453C235.062 523.453 234.371 523.367 274.422 523.349C303.941 523.336 310.389 523.145 311.926 522.241C314.776 520.565 423.905 520.565 428.522 522.241C431.16 523.199 437.551 523.387 467.439 523.387C499.23 523.387 503.389 523.25 504.92 522.147C507.056 520.606 507.156 521.301 501.41 497.786C497.874 483.316 496.587 479.162 495.311 478.099C493.779 476.821 487.255 476.761 370.954 476.948C251.264 477.142 248.175 477.183 246.644 478.608C244.907 480.226 244.884 480.304 240.588 498.153C238.921 505.083 237.165 511.002 236.687 511.306C234.698 512.571 234.605 510.175 236.364 503.007C237.379 498.873 238.991 491.878 239.946 487.464C241.401 480.746 242.07 479.035 244.054 476.955L246.425 474.471L281.218 474.439C423.014 474.307 494.833 474.605 496.382 475.332C499.019 476.568 500.191 479.372 502.733 490.522C504.026 496.197 506.251 505.223 507.678 510.579C509.703 518.182 510.097 520.654 509.473 521.853C508.676 523.386 508.763 523.387 608.031 523.354C713.183 523.318 710.737 523.397 714.49 519.902C715.28 519.167 715.926 517.809 715.926 516.886C715.926 515.963 711.999 508.958 707.2 501.32C702.401 493.682 695.994 483.398 692.963 478.468C668.098 438.02 655.988 419.61 652.837 417.463L650.087 415.591L373.059 415.414C220.693 415.316 94.8911 415.427 93.4986 415.66ZM92.4314 418.231C91.639 418.827 91.157 419.43 91.3613 419.569C91.5648 419.709 95.4911 419.715 100.086 419.584C106.749 419.394 108.441 419.122 108.441 418.247C108.441 416.679 94.5108 416.667 92.4314 418.231ZM633.667 418.075C633.892 418.772 636.208 419.122 641.607 419.277C647.559 419.447 649.16 419.28 648.912 418.513C648.688 417.816 646.372 417.466 640.973 417.311C635.021 417.141 633.42 417.308 633.667 418.075ZM118.716 421.542C117.68 422.699 115.723 425.708 114.368 428.23C113.012 430.752 108.791 438.039 104.987 444.424C93.1667 464.264 90.4493 469.254 91.1006 469.92C91.9443 470.783 150.704 471.029 151.516 470.173C151.866 469.805 152.803 467.783 153.599 465.681L155.045 461.86L159.406 461.37C161.805 461.1 170.207 460.842 178.078 460.797L192.388 460.713L191.894 462.815C190.484 468.811 192.132 468.304 173.322 468.533C161.158 468.681 156.383 468.99 156.172 469.643C155.954 470.318 160.368 470.609 173.563 470.791C183.288 470.925 191.645 470.919 192.133 470.776C192.622 470.634 193.652 468.57 194.423 466.189C196.053 461.154 196.506 460.948 206.303 460.804C213.165 460.703 213.306 460.58 214.361 453.789L214.829 450.777H195.581H176.333L174.165 454.599L171.996 458.421H136.145H100.293L101.761 455.936L103.229 453.452L138.635 453.07C166.033 452.774 174.111 452.472 174.351 451.733C174.595 450.978 167.333 450.777 139.676 450.777H104.693L105.988 448.744L107.281 446.712L149.063 447.236L190.843 447.759L191.69 444.301C192.331 441.679 192.886 440.841 193.983 440.841C195.152 440.841 195.324 441.172 194.88 442.561C194.578 443.506 194.305 444.969 194.274 445.809C194.219 447.287 194.692 447.338 208.688 447.336C221.873 447.335 223.182 447.216 223.41 445.999C223.64 444.768 222.63 444.663 210.558 444.663H197.455L197.692 442.943C197.888 441.525 198.45 441.191 200.9 441.041C202.534 440.94 206.61 440.653 209.959 440.403L216.047 439.946L217.282 436.122C218.044 433.761 218.251 432.024 217.825 431.585C217.429 431.177 210.362 430.962 201.267 431.081L185.4 431.287L184.466 435.06C183.952 437.135 183.7 439.113 183.905 439.455C184.11 439.797 185.428 440.077 186.834 440.077C189.7 440.077 189.657 440.015 188.665 442.702L187.941 444.663H173.441C165.466 444.663 158.941 444.468 158.941 444.23C158.941 443.993 159.27 443.165 159.672 442.391C160.306 441.172 161.796 440.911 170.868 440.43C181.26 439.879 181.337 439.861 182.084 437.874C182.497 436.774 183.017 434.756 183.239 433.389L183.643 430.905H166.922C150.827 430.905 150.188 430.962 149.814 432.434C149.435 433.925 149.791 433.962 164.209 433.962H178.992V435.873V437.784H145.944C127.768 437.784 112.897 437.516 112.897 437.19C112.897 436.863 113.441 435.796 114.106 434.819L115.315 433.042L130.445 433.428L145.574 433.815L147.059 431.669C147.875 430.489 148.544 429.299 148.544 429.026C148.544 428.752 149.22 427 150.047 425.131L151.551 421.733H163.786C170.516 421.733 176.022 422.012 176.022 422.352C176.022 422.692 175.604 423.546 175.093 424.25C174.307 425.335 172.412 425.563 162.715 425.734C154.359 425.882 151.181 426.195 150.956 426.892C150.717 427.633 153.644 427.848 163.979 427.848H177.309L179.275 424.791L181.241 421.733H194.211H207.181L206.335 423.644L205.489 425.555H192.656C184.367 425.555 179.649 425.844 179.333 426.37C179.063 426.818 178.964 427.309 179.11 427.46C179.257 427.612 185.882 427.816 193.832 427.914L208.287 428.094L209.634 424.914L210.982 421.733H224.002H237.022L236.785 423.453C236.55 425.148 236.372 425.176 224.108 425.382C212.702 425.575 210.174 426.043 212.514 427.531C212.98 427.827 218.21 427.996 224.136 427.907C231.731 427.792 235.071 428.009 235.45 428.641C236.406 430.233 239.793 427.239 240.323 424.334L240.797 421.733H253.763H266.728L266.491 423.453C266.257 425.146 266.064 425.176 254.185 425.383C244.136 425.558 242.117 425.781 242.117 426.721C242.117 427.667 244.003 427.848 253.851 427.848C261.476 427.848 265.874 428.146 266.411 428.699C267.693 430.018 268.777 428.835 269.683 425.128L270.514 421.733H284.536C292.248 421.733 298.553 421.991 298.547 422.307C298.504 424.46 296.951 424.759 284.796 424.963C273.498 425.151 272.188 425.31 271.963 426.51C271.734 427.742 272.718 427.848 284.394 427.848C292.351 427.848 297.073 428.132 297.073 428.612C297.073 429.747 299.251 429.537 300.468 428.284C301.051 427.684 301.534 426.394 301.54 425.418C301.564 421.758 301.874 421.684 316.436 421.907C329.558 422.107 330.121 422.178 330.121 423.644C330.121 425.114 329.625 425.173 317.309 425.173C305.603 425.173 304.498 425.288 304.499 426.51C304.5 427.737 305.665 427.848 318.565 427.848H332.63L332.861 424.982L333.091 422.116L347.016 421.908L360.941 421.7V423.659V425.618L348.13 425.515C336.952 425.425 335.289 425.567 335.079 426.63C334.866 427.711 336.47 427.848 349.375 427.848H363.911V424.791C363.911 422.583 364.221 421.733 365.025 421.733C365.83 421.733 366.139 422.583 366.139 424.791V427.848H379.507C390.894 427.848 392.875 427.678 392.875 426.701C392.875 425.728 391.018 425.555 380.621 425.555H368.367V423.62V421.685L381.522 421.901L394.677 422.116L395.335 424.982L395.993 427.848H410.029H424.066V424.791C424.066 422.583 424.375 421.733 425.18 421.733C425.984 421.733 426.294 422.583 426.294 424.791V427.848H440.784H455.275L454.799 424.791C454.481 422.742 454.6 421.733 455.162 421.733C455.622 421.733 456 422.696 456 423.873C456 427.626 456.796 427.848 470.258 427.848C481.645 427.848 482.735 427.731 482.736 426.51C482.737 425.284 481.801 425.193 471.552 425.42C460.221 425.67 458.227 425.276 458.227 422.787C458.227 421.932 460.649 421.734 471.038 421.739L483.849 421.746L484.777 423.802C485.288 424.934 485.705 426.307 485.705 426.853C485.705 427.65 490.66 427.848 510.584 427.848C534.967 427.848 535.463 427.878 535.463 429.377C535.463 430.895 534.967 430.905 461.941 430.905C408.074 430.905 388.419 431.134 388.419 431.763C388.419 432.389 388.142 432.385 387.395 431.746C386.684 431.139 381.967 430.935 371.985 431.079L357.599 431.287L357.376 435.682L357.153 440.077H361.585C364.403 440.077 366.173 440.425 366.449 441.032C366.795 441.797 366.969 441.797 367.315 441.032C367.553 440.507 368.723 440.077 369.914 440.077C372.045 440.077 372.08 440.146 372.08 444.281C372.08 448.255 372.181 448.484 373.937 448.484C375.67 448.484 375.794 448.23 375.794 444.663V440.841H380.902C386.444 440.841 387.904 439.992 387.19 437.182C386.602 434.869 387.382 433.13 388.762 433.675C389.51 433.97 389.904 435.119 389.904 437.001C389.904 439.731 390.046 439.901 392.689 440.351C394.221 440.611 398.23 440.828 401.601 440.833L407.727 440.841L407.815 443.707C407.864 445.284 407.849 447.004 407.783 447.529C407.71 448.111 408.545 448.484 409.923 448.484C412.14 448.484 412.183 448.412 412.183 444.663V440.841H416.268H420.352V437.402V433.962H432.606H444.86L444.861 436.064L444.862 438.166L434.093 437.936C423.727 437.714 423.323 437.763 423.323 439.242C423.323 440.628 423.882 440.798 429.079 441C434.267 441.201 434.834 441.374 434.834 442.752C434.834 444.197 434.27 444.292 424.623 444.493C419.007 444.61 414.411 444.972 414.411 445.296C414.411 445.621 414.812 446.298 415.302 446.803C416.503 448.039 432.344 448.066 433.54 446.835C434.148 446.21 434.681 446.187 435.36 446.757C435.941 447.245 441.516 447.605 449.501 447.67C462.304 447.774 462.683 447.733 462.683 446.221C462.683 444.718 462.262 444.663 450.801 444.663H438.919V442.752C438.919 441.1 439.251 440.841 441.369 440.841C442.717 440.841 444.221 440.429 444.711 439.924C445.312 439.306 445.602 439.281 445.602 439.845C445.602 440.307 446.521 440.651 447.645 440.61C448.768 440.569 453.279 440.605 457.67 440.688L465.654 440.841V443.805C465.654 446.874 467.17 449.027 468.663 448.078C469.216 447.726 469.34 446.377 469.022 444.19L468.533 440.841H473.862H479.19L478.689 437.402L478.188 433.962H493.087H507.985V435.873V437.784H494.617C481.745 437.784 481.25 437.841 481.25 439.313C481.25 440.748 481.745 440.841 489.349 440.841H497.448L497.959 444.663C498.481 448.572 499.519 449.38 501.968 447.784C502.849 447.21 502.824 446.639 501.802 444.008C501.138 442.303 500.861 440.739 501.186 440.532C501.51 440.325 507.891 440.27 515.365 440.409C525.846 440.604 529.101 440.9 529.598 441.706C531.317 444.498 530.609 444.663 516.897 444.663C509.544 444.663 503.529 444.965 503.529 445.334C503.529 447.457 506.012 447.8 520.178 447.635C535.991 447.451 535.806 447.513 533.625 443.171C532.648 441.228 532.655 440.941 533.686 440.533C534.321 440.283 541.601 440.077 549.862 440.077H564.883L567.192 445.427L569.502 450.777L501.426 450.816C463.983 450.837 425.579 450.82 416.082 450.78L398.816 450.705V455.281C398.816 458.002 399.175 460.087 399.702 460.422C401.024 461.264 432.432 461.582 433.673 460.767C434.452 460.255 434.524 459.792 433.944 459.052C433.507 458.495 432.917 456.921 432.633 455.554L432.117 453.07H440.33C449.795 453.07 448.697 451.905 450.003 463.337C450.442 467.176 451.193 470.437 451.72 470.786C452.236 471.128 459.843 471.323 468.625 471.22C482.241 471.059 484.591 470.863 484.591 469.885C484.591 468.916 482.239 468.68 469.367 468.357L454.143 467.974L453.667 463.389C453.405 460.866 453.154 457.506 453.11 455.92L453.029 453.039L468.057 453.245L483.085 453.452L484.425 458.421C485.162 461.153 485.865 465.108 485.987 467.21L486.209 471.032L494.498 471.248L502.786 471.464V469.622C502.786 468.608 502.285 466.544 501.672 465.035C499.782 460.379 499.635 460.449 510.027 460.999C515.416 461.284 519.942 461.2 520.532 460.802C521.537 460.125 521.46 458.69 520.169 454.026C519.829 452.794 520.008 452.306 520.798 452.306C521.486 452.306 522.261 453.674 522.856 455.936C523.381 457.933 524.134 459.997 524.53 460.522C525.042 461.204 528.157 461.478 535.405 461.478H545.561L546.635 464.344C547.226 465.921 547.82 467.462 547.956 467.77C548.091 468.078 539.766 468.422 529.455 468.535C515.261 468.689 510.632 468.971 510.398 469.694C510.156 470.443 514.491 470.65 530.45 470.65C541.648 470.65 551.016 470.439 551.266 470.181C551.852 469.579 549.687 463.803 548.215 462.035C547.14 460.746 547.812 460.691 562.492 460.888L577.898 461.096L579.911 466.064L581.924 471.032L599.186 471.237C618.809 471.47 618.662 471.52 615.373 465.746C614.31 463.879 613.441 462.009 613.441 461.59C613.441 461.113 618.821 460.798 627.841 460.747L642.241 460.665L645.267 465.595C648.653 471.115 649.582 471.975 650.801 470.721C651.427 470.076 651.319 469.323 650.377 467.768C649.682 466.621 643.511 456.097 636.665 444.382C629.819 432.668 623.48 422.263 622.578 421.262L620.938 419.44H370.77H120.601L118.716 421.542ZM120.495 423.262C119.58 424.769 119.753 424.791 132.915 424.791C145.503 424.791 146.309 424.703 147.058 423.262C147.84 421.76 147.623 421.733 134.638 421.733C122.227 421.733 121.366 421.827 120.495 423.262ZM398.207 423.453C398.44 425.14 398.661 425.177 409.77 425.384L421.095 425.595V423.664V421.733H409.532H397.97L398.207 423.453ZM428.522 423.675V425.616L440.033 425.515L451.544 425.414V423.574V421.733H440.033H428.522V423.675ZM487.933 422.435C487.933 425.462 488.377 425.555 502.866 425.555C510.892 425.555 516.897 425.255 516.897 424.853C516.897 421.826 516.452 421.733 501.964 421.733C493.938 421.733 487.933 422.034 487.933 422.435ZM519.125 422.166C519.125 422.404 519.471 423.264 519.893 424.077C520.631 425.495 521.719 425.555 546.851 425.555C566.231 425.555 573.272 425.793 573.932 426.472C575.293 427.873 575.088 425.521 573.667 423.432L572.511 421.733H545.817C531.136 421.733 519.125 421.928 519.125 422.166ZM577.051 422.352C577.051 422.692 577.488 423.585 578.021 424.335C578.921 425.602 580.507 425.682 599.868 425.437C611.35 425.292 620.987 424.923 621.283 424.618C621.579 424.313 621.399 423.539 620.882 422.898C620.08 421.904 616.805 421.733 598.497 421.733C586.702 421.733 577.051 422.012 577.051 422.352ZM108.441 426.947C108.441 427.572 95.9234 448.952 88.1389 461.625L84.0573 468.268L80.4681 468.503C77.8741 468.674 76.8782 469.057 76.8782 469.885C76.8782 471.707 83.6734 471.892 85.579 470.121C86.3974 469.361 90.1656 463.408 93.9524 456.892C97.7391 450.376 103.049 441.268 105.753 436.651C110.842 427.961 111.446 426.319 109.555 426.319C108.942 426.319 108.441 426.602 108.441 426.947ZM117.589 428.475C117.051 429.031 116.61 429.805 116.61 430.195C116.61 430.606 122.389 430.905 130.349 430.905C137.905 430.905 144.088 430.761 144.088 430.586C144.088 430.41 144.285 429.737 144.526 429.091C144.908 428.067 143.275 427.888 131.766 427.691C121.583 427.517 118.345 427.697 117.589 428.475ZM573.841 427.713C573.156 427.849 572.595 428.623 572.595 429.432C572.595 430.859 573.42 430.905 598.588 430.905C612.884 430.905 624.575 430.648 624.569 430.332C624.522 427.942 623.248 427.807 599.221 427.636C585.947 427.542 574.527 427.577 573.841 427.713ZM631.264 428.112C631.264 428.677 632.531 431.17 634.079 433.653C635.627 436.135 640.966 445.069 645.943 453.508C650.919 461.945 655.633 469.446 656.416 470.176C658.381 472.006 664.927 471.65 665.288 469.694C665.497 468.564 664.956 468.357 661.805 468.357C657.256 468.357 657.852 469.09 645.361 448.125C640.36 439.731 635.432 431.562 634.41 429.973C632.51 427.017 631.264 426.28 631.264 428.112ZM538.433 429.377C539.189 430.831 539.988 430.905 554.824 430.905C570.189 430.905 570.408 430.882 569.625 429.377C568.869 427.922 568.069 427.848 553.234 427.848C537.869 427.848 537.65 427.871 538.433 429.377ZM219.435 433.539C218.84 435.006 218.352 436.893 218.352 437.733C218.352 439.604 220.528 440.912 222.677 440.334C223.554 440.098 224.779 440.105 225.399 440.35C226.401 440.746 226.392 441.144 225.318 443.908C223.988 447.329 224.014 447.457 226.123 447.839C227.282 448.048 227.859 447.317 228.934 444.281L230.288 440.459L238.134 440.504C247.034 440.556 247.714 440.139 248.182 434.345L248.43 431.287L234.474 431.079L220.519 430.872L219.435 433.539ZM251.138 431.584C250.523 431.985 250.091 433.833 250.024 436.349L249.915 440.459L253.814 440.69C257.394 440.902 257.713 441.074 257.713 442.792V444.663H244.716C232.31 444.663 231.72 444.731 231.72 446.159C231.72 447.582 232.39 447.666 245.533 447.878C253.13 448.001 259.622 447.926 259.959 447.71C260.296 447.495 260.681 445.947 260.814 444.271L261.055 441.223L269.544 440.841C279.035 440.414 278.228 440.984 279.539 433.771L280.06 430.905L266.101 430.917C258.424 430.924 251.691 431.223 251.138 431.584ZM281.353 434.338C281.286 436.233 281.202 438.386 281.168 439.122C281.102 440.533 280.589 440.485 298.744 440.764C303.576 440.838 303.757 440.91 303.757 442.752V444.663H295.959C288.657 444.663 288.161 444.76 288.161 446.191C288.161 447.638 288.657 447.72 297.419 447.72H306.676L307.169 443.898C307.574 440.756 307.925 440.077 309.147 440.077C310.499 440.077 310.588 440.418 310.139 443.898L309.647 447.72H324.526H339.404V444.372V441.025L347.979 440.473L356.555 439.922L356.334 435.604L356.113 431.287L318.795 431.089L281.477 430.891L281.353 434.338ZM323.808 436.157V439.88L318.534 440.414C312.021 441.075 311.183 441.394 311.183 443.216C311.183 444.579 311.917 444.663 323.857 444.663H336.532L336.297 442.561C336.07 440.534 335.877 440.445 330.863 440.077L325.665 439.695L325.712 436.064C325.744 433.552 325.458 432.434 324.783 432.434C324.112 432.434 323.808 433.592 323.808 436.157ZM554.04 434.727C554.071 437.83 553.762 437.806 592.222 437.6L629.204 437.402L627.821 435.651L626.437 433.9L590.233 433.74C558.474 433.6 554.03 433.721 554.04 434.727ZM186.494 435.682L185.876 437.402L198.933 437.611C206.114 437.727 212.419 437.651 212.943 437.444C213.467 437.237 213.897 436.369 213.897 435.515C213.897 434.012 213.47 433.962 200.505 433.962C187.296 433.962 187.105 433.986 186.494 435.682ZM221.349 435.441C220.926 436.254 220.58 437.114 220.58 437.351C220.58 437.589 225.892 437.784 232.383 437.784C244.502 437.784 245.088 437.64 245.088 434.664C245.088 434.268 240.082 433.962 233.603 433.962C223.008 433.962 222.058 434.077 221.349 435.441ZM252.04 435.109C251.066 437.721 252.172 438.192 258.922 438.04C262.546 437.959 267.767 437.868 270.523 437.838C275.361 437.786 275.536 437.717 275.536 435.873V433.962H264.002C254.434 433.962 252.395 434.158 252.04 435.109ZM282.963 435.839V437.716L295.773 437.941C302.82 438.064 311.174 438.053 314.34 437.915C319.866 437.673 320.095 437.59 320.095 435.813V433.962H301.529H282.963V435.839ZM328.76 434.472C328.487 434.752 328.264 435.612 328.264 436.383C328.264 437.685 329.131 437.784 340.518 437.784H352.772V435.873V433.962H341.013C334.546 433.962 329.031 434.192 328.76 434.472ZM360.198 435.873V437.784H372.452H384.705V435.873V433.962H372.452H360.198V435.873ZM392.132 435.854V437.784H404.438H416.742L416.506 436.064C416.272 434.371 416.079 434.341 404.2 434.134L392.132 433.924V435.854ZM448.573 435.873V437.784H461.569H474.566V435.873V433.962H461.569H448.573V435.873ZM509.388 434.303C508.788 434.919 509.479 438.464 510.301 438.987C511.036 439.454 511.043 438.265 510.321 435.622C510.053 434.643 509.633 434.05 509.388 434.303ZM513.183 434.664C513.183 437.765 513.306 437.784 533.022 437.784C549.986 437.784 551.913 437.658 551.509 436.575C551.261 435.91 551.058 435.05 551.058 434.664C551.058 434.257 543.126 433.962 532.121 433.962C521.116 433.962 513.183 434.257 513.183 434.664ZM110.34 441.776C109.704 442.71 109.183 443.735 109.183 444.053C109.183 444.372 119.364 444.598 131.807 444.556L154.431 444.48L155.571 442.687C156.2 441.702 156.713 440.711 156.713 440.486C156.713 440.261 146.539 440.077 134.104 440.077C111.583 440.077 111.491 440.084 110.34 441.776ZM568.139 440.481C568.139 440.703 569.124 442.892 570.327 445.345C572.142 449.046 572.917 449.888 574.876 450.291C576.174 450.559 590.396 450.777 606.478 450.777C629.977 450.777 635.72 450.582 635.72 449.784C635.72 447.065 634.478 446.956 603.638 446.956C583.933 446.956 573.338 446.688 573.338 446.191C573.338 445.771 573.338 445.221 573.338 444.969C573.338 444.717 586.538 444.476 602.672 444.434C618.806 444.391 632.007 444.158 632.007 443.915C632.007 443.672 631.486 442.71 630.851 441.776L629.695 440.077H598.917C581.989 440.077 568.139 440.259 568.139 440.481ZM341.922 442.696C341.697 443.296 341.624 444.586 341.759 445.562L342.003 447.338H355.732C368.216 447.338 369.483 447.216 369.711 446C369.942 444.768 368.94 444.663 356.91 444.663C344.355 444.663 343.86 444.605 343.86 443.134C343.86 441.376 342.525 441.075 341.922 442.696ZM536.948 444.963C536.948 445.969 537.366 446.915 537.876 447.065C538.387 447.215 544.721 447.237 551.951 447.113C563.094 446.922 565.033 446.719 564.682 445.776C564.341 444.862 562.024 444.663 551.765 444.663C544.232 444.663 539.081 444.359 538.805 443.898C537.973 442.514 536.948 443.101 536.948 444.963ZM72.9607 445.963C72.152 447.139 67.9939 453.777 63.7207 460.713C59.4475 467.65 50.3835 482.347 43.5779 493.373C36.773 504.399 31.2054 513.8 31.2054 514.264C31.2054 515.86 33.0508 514.468 35.4028 511.097C36.6995 509.239 42.4134 500.152 48.1006 490.904C53.7878 481.656 62.3602 467.744 67.1517 459.989C71.9425 452.234 75.9239 445.571 75.9989 445.18C76.3256 443.487 74.3056 444.007 72.9607 445.963ZM483.292 444.492C472.952 444.692 472.338 444.788 472.338 446.212C472.338 447.648 472.885 447.72 483.849 447.72C494.748 447.72 495.36 447.641 495.36 446.237C495.36 445.42 495.11 444.647 494.803 444.517C494.496 444.387 489.316 444.376 483.292 444.492ZM664.34 444.616C664.103 445.011 664.389 445.612 664.976 445.954C665.563 446.295 667.363 448.809 668.977 451.542C672.033 456.715 696.284 495.788 703.807 507.661C707.755 513.891 709.985 516.307 709.985 514.351C709.985 513.459 688.444 478.179 669.418 447.911C667.035 444.119 665.311 443 664.34 444.616ZM263.654 446.217C263.654 447.715 264.047 447.767 274.422 447.639C284.38 447.517 285.191 447.4 285.191 446.084C285.191 444.764 284.426 444.663 274.422 444.663C264.089 444.663 263.654 444.725 263.654 446.217ZM378.764 446.191C378.764 447.662 379.26 447.72 391.761 447.72C404.262 447.72 404.757 447.662 404.757 446.191C404.757 444.721 404.262 444.663 391.761 444.663C379.26 444.663 378.764 444.721 378.764 446.191ZM217.371 451.367C216.536 452.878 215.314 459.983 215.761 460.726C216.067 461.235 218.251 461.522 221.211 461.442C223.927 461.368 230.213 461.346 235.178 461.393C245.08 461.486 244.33 461.036 243.265 466.243L242.837 468.334L220.384 468.536C203.02 468.693 197.93 468.955 197.93 469.694C197.93 470.22 198.18 470.65 198.487 470.65C198.793 470.65 209.545 470.65 222.38 470.65H245.717L247.705 461.852L249.692 453.056L284.708 453.254L319.724 453.452V455.745V458.038L285.748 458.237C252.389 458.432 251.772 458.463 251.772 459.957C251.772 461.453 252.326 461.478 286.527 461.478C312.57 461.478 321.507 461.248 322.175 460.561C322.665 460.056 323.066 457.649 323.066 455.21V450.776L270.372 450.793C241.39 450.803 217.539 451.061 217.371 451.367ZM325.294 455.656C325.294 460.07 325.453 460.579 326.965 460.996C327.884 461.249 334.501 461.462 341.669 461.467C354.25 461.478 356.485 461.11 356.485 459.032C356.485 458.696 350.135 458.421 342.375 458.421H328.264V455.745V453.07H343.488H358.713V456.877C358.713 460.191 358.93 460.739 360.384 461.106C361.303 461.337 369.741 461.43 379.136 461.311L396.216 461.096L396.443 456.581C396.597 453.486 396.364 451.866 395.7 451.433C395.167 451.085 379.107 450.796 360.012 450.789L325.294 450.777V455.656ZM180.393 453.608C178.783 453.864 176.764 456.348 176.764 458.074C176.764 458.265 184.063 458.421 192.983 458.421H209.202L210.064 456.474C210.538 455.403 210.926 454.199 210.926 453.799C210.926 453.097 184.641 452.933 180.393 453.608ZM219.563 454.79C218.599 458.493 218.349 458.421 232.091 458.421C241.988 458.421 245.09 458.193 245.098 457.465C245.103 456.94 245.31 455.735 245.556 454.79L246.003 453.07H233.007C220.157 453.07 220.006 453.089 219.563 454.79ZM362.426 455.729V458.421H377.697H392.969L392.736 455.936L392.503 453.452L377.465 453.245L362.426 453.039V455.729ZM402.298 453.562C402.017 453.852 401.786 455.064 401.786 456.255V458.421H415.899H430.011L429.027 455.936L428.043 453.452L415.426 453.244C408.488 453.129 402.58 453.273 402.298 453.562ZM488.25 453.531C487.812 453.718 487.599 454.895 487.777 456.146L488.102 458.421H502.885H517.667L517.18 456.319C516.911 455.162 516.55 453.959 516.379 453.644C516.052 453.044 489.638 452.939 488.25 453.531ZM525.819 454.026C525.824 454.552 526.03 455.755 526.276 456.701C526.72 458.403 526.86 458.421 540.006 458.421C547.309 458.421 553.286 458.232 553.286 458C553.286 457.769 552.776 456.566 552.153 455.325L551.02 453.07H538.414C528.819 453.07 525.811 453.299 525.819 454.026ZM555.514 453.793C555.514 454.196 555.902 455.403 556.376 456.474L557.238 458.421H599.151H641.064L639.537 455.936L638.008 453.452L596.762 453.255C570.731 453.131 555.514 453.329 555.514 453.793ZM436.832 459.758C437.034 460.837 437.866 461.096 441.147 461.096C444.427 461.096 445.259 460.837 445.461 459.758C445.677 458.602 445.094 458.421 441.147 458.421C437.199 458.421 436.616 458.602 436.832 459.758ZM456.883 459.758C457.105 460.955 458.4 461.12 469.19 461.325C480.925 461.548 481.25 461.512 481.25 459.987C481.25 458.471 480.854 458.421 468.942 458.421C457.619 458.421 456.653 458.528 456.883 459.758ZM124.994 461.297L98.8449 461.497L96.5516 464.927L94.2591 468.357H121.711H149.164L150.446 464.9C151.152 462.999 151.597 461.365 151.435 461.27C151.274 461.174 139.376 461.186 124.994 461.297ZM489.044 463.197C490.08 468.496 489.929 468.357 494.667 468.357C499.592 468.357 499.86 467.955 497.997 463.364C496.95 460.785 496.809 460.713 492.74 460.713H488.558L489.044 463.197ZM581.518 461.27C581.554 463.14 583.427 463.376 596.597 463.165C607.102 462.996 610.498 462.711 610.274 462.018C609.936 460.972 581.498 460.232 581.518 461.27ZM583.735 466.801C583.735 467.627 584.381 468.659 585.171 469.094C586.71 469.942 601.139 470.02 608.819 469.223C613.478 468.739 613.48 468.738 612.304 467.019C611.157 465.341 610.792 465.299 597.431 465.299C584.312 465.299 583.735 465.363 583.735 466.801ZM557.044 467.919C555.224 470.176 556.968 470.65 567.121 470.65C577.102 470.65 577.153 470.64 576.917 468.93C576.687 467.264 576.389 467.203 567.319 466.997C559.764 466.825 557.783 467.003 557.044 467.919ZM620.464 468.409C620.181 468.882 620.458 469.791 621.08 470.432C622.702 472.101 642.033 470.892 642.033 469.121C642.033 468.166 640.276 467.939 631.506 467.763C624.316 467.618 620.816 467.823 620.464 468.409ZM250.046 469.428C249.433 471.072 250.198 471.414 254.495 471.414C257.96 471.414 258.455 471.223 258.455 469.885C258.455 468.545 257.96 468.357 254.45 468.357C251.7 468.357 250.32 468.692 250.046 469.428ZM262.169 469.885C262.169 471.405 262.664 471.414 354.628 471.414C446.592 471.414 447.088 471.405 447.088 469.885C447.088 468.365 446.592 468.357 354.628 468.357C262.664 468.357 262.169 468.365 262.169 469.885ZM234.359 483.66C232.154 490.844 225.717 515.177 225.214 518.228C224.966 519.737 225.179 520.33 225.97 520.33C227.114 520.33 228.555 515.743 234.729 492.433C238.933 476.559 238.758 477.528 237.409 477.528C236.6 477.528 235.662 479.414 234.359 483.66ZM504.456 480.301C504.835 483.446 513.633 518.46 514.34 519.636C515.118 520.932 517.088 520.417 516.579 519.051C516.317 518.348 514.279 510.351 512.052 501.281C506.996 480.691 506.217 478.069 505.042 477.665C504.349 477.427 504.193 478.127 504.456 480.301ZM23.7789 524.044C23.7789 525.267 27.9385 527.287 33.3828 528.708C36.0103 529.394 38.2939 530.369 38.4581 530.875C38.871 532.151 36.2791 531.974 30.0914 530.304C27.2322 529.532 24.7718 529.016 24.6248 529.159C24.477 529.301 25.2115 530.232 26.2564 531.23C30.6573 535.428 22.6694 535.197 171.741 535.427L309.676 535.64L308.825 533.717L307.974 531.795L215.819 531.775C67.301 531.743 42.8872 531.557 42.5307 530.457C42.2842 529.695 69.0759 529.502 174.846 529.502C292.239 529.502 307.47 529.37 307.47 528.355C307.47 527.34 291.934 527.208 172.123 527.203C82.9285 527.199 35.1696 526.929 32.0661 526.411C29.4765 525.978 26.5519 525.082 25.5679 524.418C24.5 523.698 23.7789 523.547 23.7789 524.044ZM712.213 525.171L708.871 526.827L570.924 527.029C449.527 527.208 432.977 527.369 432.977 528.367C432.977 529.367 449.23 529.502 569.118 529.502C717.497 529.502 710.107 529.715 714.986 525.297C717.495 523.023 716.628 522.984 712.213 525.171ZM313.52 524.831C312.9 525.235 315.468 525.676 320.204 525.978C330.233 526.619 427.779 526.274 427.779 525.598C427.779 525.313 427.25 524.871 426.604 524.616C424.759 523.887 314.646 524.097 313.52 524.831ZM313.411 529.449C313.411 529.801 314.749 531.332 316.384 532.853L319.357 535.616H369.892C424.118 535.616 423.999 535.625 425.177 531.803C425.763 529.902 427.036 529.78 427.036 531.624C427.036 533.944 424.886 536.287 422.002 537.111C420.226 537.618 401.308 537.902 369.09 537.905C313.117 537.91 317.575 538.353 313.359 532.363C311.783 530.124 311.184 529.672 311.186 530.725C311.191 533.397 314.111 537.2 317.277 538.659C320.221 540.016 322.789 540.067 370.918 539.736C401.491 539.527 422.377 539.088 423.771 538.627C427.015 537.555 429.381 534.69 429.519 531.669L429.636 529.12L371.523 528.965C339.561 528.88 313.411 529.098 313.411 529.449ZM712.213 530.105C709.797 531.32 699.831 531.439 570.738 531.795L431.863 532.177L431.626 533.897L431.389 535.616L516.288 535.78C639.237 536.017 699.979 535.676 704.786 534.721C709.259 533.834 713.625 531.817 715.138 529.94C716.375 528.407 715.489 528.457 712.213 530.105ZM25.9474 535.916C26.5282 536.641 28.1991 537.815 29.6607 538.527C32.1248 539.725 42.6347 539.835 172.989 540.021L313.659 540.222L312.306 538.684C310.96 537.153 310.279 537.145 173.864 537.111C88.7984 537.091 35.5068 536.799 33.4333 536.342C25.0436 534.491 24.7963 534.478 25.9474 535.916ZM711.099 535.852C709.478 536.485 670.962 536.831 569.625 537.124C439.857 537.5 430.227 537.617 428.15 538.839C426.04 540.081 433.35 540.141 566.283 539.985L706.643 539.82L710.913 537.76C716.49 535.07 716.624 533.698 711.099 535.852ZM77.808 547.526C77.5562 547.784 64.2146 547.949 48.1585 547.89C24.3233 547.803 19.1426 547.965 19.9246 548.77C21.1596 550.043 78.4177 550.52 79.1715 549.265C79.7136 548.362 78.4994 546.814 77.808 547.526ZM672.852 548.5C672.852 549.441 702.221 550.339 712.059 549.698C727.543 548.69 720.503 547.845 696.617 547.845C683.547 547.845 672.852 548.14 672.852 548.5Z"
                    fill="black"
                />
            </svg>
        </div>
    );
};

export default Laptop;
