import { SECONDARY, BLACK } from './colors';

export const dropShadow = {
    shadowColor: BLACK,
    //android specific
    elevation: 10,
    //ios specific
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
};

export const insetShadow = {
    borderRadius: 4,
    borderTopWidth: 5,
    borderTopColor: SECONDARY
}
