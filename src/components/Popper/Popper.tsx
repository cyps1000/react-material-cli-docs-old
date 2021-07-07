import { ReactElement, useState, cloneElement, Fragment } from "react";

/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports Material UI components
 */
import { Box, ClickAwayListener, Paper, Zoom } from "@material-ui/core";
import {
  Popper as PopperMui,
  PopperProps as PopperMuiProps,
  PopperPlacementType
} from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./Popper.styles";

/**
 * Defines the child props type
 */
export type ChildProps = {
  [key: string]: any;
};

/**
 * Defines the props interface
 */
export interface PopperProps {
  text?: string;
}

/**
 * Defines the Popper render props
 */
export interface PopperRenderProps {
  closePopper: () => void;
}

/**
 * Defines the render popper content interface
 */
export interface PopperContentProps {
  placement: PopperPlacementType;
  TransitionProps?: {
    in: boolean;
    onEnter: () => {};
    onExited: () => {};
  };
}

/**
 * Defines the props interface
 */
export interface PopperProps {
  content?: ReactElement | string | (() => ReactElement);
  render?: (props: PopperRenderProps) => ReactElement | ReactElement[];
  children?: ReactElement;
  placement?: PopperPlacementType;
  className?: string;
  containerClassname?: string;
}

/**
 * Displays the component
 */
export const Popper: React.FC<PopperProps> = (props) => {
  const {
    content,
    render,
    placement,
    className,
    containerClassname,
    children
  } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Initializes the open state
   */
  const [open, setOpen] = useState(false);

  /**
   * Initializes the child node ref
   */
  const [childNode, setChildNode] = useState<HTMLElement | null>(null);

  /**
   * If there are no children, return
   */
  if (!children || (!render && !content)) return null;

  /**
   * Checks if there are any existing onClick props on the children.
   */
  const existingOnClick = children.props.onClick;

  /**
   * Handles opening the popper
   */
  const openPopper = () => {
    setOpen(true);
    existingOnClick && existingOnClick();
  };
  /**
   * Handles closing the popper
   */
  const closePopper = () => setOpen(false);

  /**
   * Handles closing the tooltip on click away
   */
  const handleOnClickAway = () => closePopper();

  /**
   * Gets the node's content
   * Handles functions that return a valid content as well
   */
  const contentNode = render
    ? render({ closePopper })
    : typeof content === "function"
    ? content()
    : content;

  /**
   * Defines the popper modifiers
   */
  const modifiers: PopperMuiProps["modifiers"] = {
    flip: {
      enabled: true
    },
    preventOverflow: {
      enabled: true,
      boundariesElement: "window"
    }
  };

  /**
   * Handles rendering the child component
   */
  const renderChildComponent = () =>
    cloneElement(children, {
      ...children.props,
      onClick: openPopper,
      open: open,
      ref: setChildNode
    });

  /**
   * Handles rendering the tooltip content
   */
  const renderPopperContent = (props: PopperContentProps) => {
    const { TransitionProps } = props;

    /**
     * Defines the content classes
     */
    const contentClasses = clsx(classes.Popper, className);

    return (
      <Zoom {...TransitionProps} timeout={200}>
        <Paper elevation={0}>
          <ClickAwayListener onClickAway={handleOnClickAway}>
            <Paper elevation={0} className={contentClasses}>
              {contentNode}
            </Paper>
          </ClickAwayListener>
        </Paper>
      </Zoom>
    );
  };

  return (
    <Fragment>
      <Box className={clsx(classes.childContainer, containerClassname)}>
        {renderChildComponent()}
      </Box>
      <PopperMui
        open={open}
        anchorEl={childNode}
        placement={placement}
        transition
        className={classes.popper}
        modifiers={modifiers}
      >
        {renderPopperContent}
      </PopperMui>
    </Fragment>
  );
};
