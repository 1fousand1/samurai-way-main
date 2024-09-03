import { connect } from "react-redux";
import { Aside } from "../Aside";
import { getUsers } from "../../../redux/selectors/usersSelector";
import { UserType } from "../../../types/usersPageType";
import { AppStateType } from "../../../redux/redux-store";
import { ProfileType } from "../../../types";

type MapStateToPropsType = {
    users: UserType[];
    profile: ProfileType | null;
};

export type AsidePropsType = MapStateToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        profile: state.profilePage.profile,
    };
};

export const AsideContainer = connect(mapStateToProps)(Aside);
