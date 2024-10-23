import {CssTransition, Dropdown}                                from '@mui/base';
import {Menu, MenuListboxSlotProps}                             from '@mui/base/Menu';
import {MenuButton as BaseMenuButton}                           from '@mui/base/MenuButton';
import {MenuItem as BaseMenuItem, menuItemClasses}              from '@mui/base/MenuItem';
import {PopupContext}                                           from '@mui/base/Unstable_Popup';
import {styled}                                                 from '@mui/system';
import {FC, ForwardedRef, forwardRef, ReactElement, useContext} from 'react';
import {useNavigate}                                            from 'react-router-dom';
import {INavItem}                                               from '../../shared/models/nav-item.ts';

interface Props {
    item: INavItem
}

const MenuTransitions: FC<Props> = ({item}): ReactElement => {
    const navigate = useNavigate();
    const createHandleMenuClick = (path: string) => () => navigate(path);

    return (
        <Dropdown>
            <MenuButton>{item.name}</MenuButton>
            <Menu slots={{listbox: AnimatedListbox}}>
                {item.children && item.children.map((child: INavItem, index: number): ReactElement => (
                    <MenuItem onClick={createHandleMenuClick(`${item.path}/${child.path}`)}
                              key={String(child.path) + index}>{child.name}</MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
};
export default MenuTransitions;


const AnimatedListbox = forwardRef((props: MenuListboxSlotProps, ref: ForwardedRef<HTMLUListElement>): ReactElement => {
    const {...other} = props;
    const popupContext = useContext(PopupContext);

    if (popupContext == null) {
        throw new Error(
            'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
        );
    }
    const verticalPlacement = popupContext.placement.split('-')[0];

    return (
        <CssTransition
            className={`placement-${verticalPlacement}`}
            enterClassName="open"
            exitClassName="closed"
        >
            <Listbox {...other} ref={ref}/>
        </CssTransition>
    );
});

const Listbox = styled('ul')(`
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0;
  background: #fff';
  border: 1px solid '#434D5B;
  color: #1C2025;
  box-shadow: 0px 4px 30px '#434D5B;
  z-index: 1;
  background: #fff;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  border: 1px solid '#434D5B;
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
);

const MenuItem = styled(BaseMenuItem)(
    () => `
  background-color: #fff;
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid #99CCF3;
    background-color: #E5EAF2;
    color: #1C2025;
  }

  &.${menuItemClasses.disabled} {
    color: #B0B8C4;
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: #F0F7FF;
    color: #003A75;
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
    () => `
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;

  &:hover {
    color: #F3F6F9;
  }

  &:active {
    background: #E5EAF2;
  }

  &:focus-visible {
    outline: none;
  }
  `,
);

