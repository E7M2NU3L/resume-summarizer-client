import { proxy } from "valtio";

const initialState = {
    ResumeIntro: true,
    initialColor: 'bg-admin-2',
}

const resumeStore = proxy(
    initialState
);

export default resumeStore;