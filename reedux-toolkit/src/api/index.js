import Chance from "chance"

const chance = Chance();

export const userData = () => {
    return chance.name({middle: true});
}