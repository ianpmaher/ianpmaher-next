import { motion } from "framer-motion";

import Seal from "./Seal";
import Cat from "./Cat";
import Dog from "./Dog";

const Landing = (props) => {
    return (
        <div className=" ">
            <div className="flex flex-row justify-normal items-center">
                <Seal />
                <Cat />
                <Dog />
            </div>
        </div>
    );
};

export default Landing;
