const initialState = {
  active: false,
  pinned: false
};

const navMenu = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_NAV_MENU':
    if (state.active || state.pinned) {
      return {
        active: false,
        pinned: false
      };
    }
    return {
      active: true,
      pinned: false
    };
  case 'PIN_NAV_MENU':
    return {
      active: false,
      pinned: true
    };
  default:
    return state;
  }
};

export default navMenu;
