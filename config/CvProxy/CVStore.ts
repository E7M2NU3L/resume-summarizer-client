import { proxy } from "valtio";

const initialState = {
    CvIntro: true,
    loading: true,
}

const CVStore = proxy(
    initialState
);

export default CVStore;