import { alpha, styled } from '@mui/material/styles';
import { Box, FormControl, GlobalStyles as MUIGlobalStyles, Stack, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { HEADER, NAV } from '../../../config-global';

// ----------------------------------------------------------------------------
// WORKSPACE

export function StyledBackgroundStyles() {
    return (
        <MUIGlobalStyles
            styles={{
                body: {
                    backgroundImage: 'unset',
                },
            }}
        />
    );
}

export const StyledAIDesktopLayout = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    gap: 0,
}));

export const StyledAIDesktopLayoutContent = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexGrow: 1,
    position: 'relative',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: `${HEADER.H_MOBILE + 8}px`,
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '&.m-padded': {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
    },
    // transition: theme.transitions.create('width', {
    //  easing: theme.transitions.easing.sharp,
    //  duration: theme.transitions.duration.leavingScreen,
    // }),
    // // marginLeft: '-240px',
    // // marginLeft: 0,
    // ...(open && {
    //  transition: theme.transitions.create('width', {
    //      easing: theme.transitions.easing.easeOut,
    //      duration: theme.transitions.duration.enteringScreen,
    //  }),
    //  // marginLeft: 0,
    //  // marginLeft: '240px',
    //  // width: 'calc(100% - 240px)',
    // }),
}));

export const StyledAIDesktopLayoutContentWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexGrow: 1,
    position: 'relative',
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${NAV.W_DASHBOARD}px`,
    // marginLeft: '-240px',
    // marginLeft: 0,
    // marginLeft: '-30px',
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        // marginLeft: '240px',
        // width: 'calc(100% - 240px)',
    }),
}));

// ----------------------------------------------------------------------------
// OUTPUT PANEL

// Output window on the left in the Workspace:
export const StyledAIOutputPanel = styled(Box)(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	// width: '100%',	/* LEAVE THIS COMMENTED OUT, OTHERWISE IT MESSES UP THE LAYOUT */
	height: '100%',
	flex: '1 1 auto',
	flexDirection: 'column',
	backgroundColor: theme.palette.grey[100], // lightest grey background for the Output Panel
	borderRadius: theme.spacing(2),
	paddingTop: theme.spacing(0),
	paddingBottom: theme.spacing(0),
	// paddingLeft: theme.spacing(4),
	// paddingRight: theme.spacing(4),
	paddingRight: 0,
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(2),
	},
	'&::-webkit-scrollbar': {
		width: '0.4em',
	},
	'&::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 10,
		visibility: 'hidden',
	},
	'&:hover': {
		'&::-webkit-scrollbar-thumb': {
			visibility: 'visible',
		},
	},
    '&::before': {
		// Inset shadow along the top, and little bit along bottom as well:
		pointerEvents: 'none',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
		width: '100%',
		height: '100%',
		borderRadius: 'inherit', // To match the container's border radius
		boxShadow: 'inset 0 16px 24px -8px rgba(35, 0, 90, 0.4), inset 0 -4px 8px -4px rgba(35, 0, 90, 0.4)', // Top and bottom shadows        pointerEvents: 'none', // This makes sure the overlay doesn't interfere with interaction of the content
		zIndex: 2,
    },
}));

export const StyledVideoChatVideoPanel = styled(Box)(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	// width: '100%',	/* LEAVE THIS COMMENTED OUT, OTHERWISE IT MESSES UP THE LAYOUT */
	height: '100%',
	flex: '1 1 auto',
	flexDirection: 'column',
	backgroundColor: theme.palette.grey[100], // lightest grey background for the Output Panel	
	borderRadius: theme.spacing(2),
	paddingTop: theme.spacing(0),
	paddingBottom: theme.spacing(0),
	// paddingLeft: theme.spacing(4),
	// paddingRight: theme.spacing(4),
	paddingRight: 0,
    overflow: 'hidden',
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(2),
	},
	'&::-webkit-scrollbar': {
		width: '0.4em',
	},
	'&::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 10,
		visibility: 'hidden',
	},
	'&:hover': {
		'&::-webkit-scrollbar-thumb': {
			visibility: 'visible',
		},
	},
    '&::before': {
        // Inset shadow along the top, and little bit along bottom as well:
        pointerEvents: 'none',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: 'inherit', // To match the container's border radius
        boxShadow: 'inset 0 16px 24px -8px rgba(35, 0, 90, 0.4), inset 0 -4px 8px -4px rgba(35, 0, 90, 0.4)', // Top and bottom shadows        pointerEvents: 'none', // This makes sure the overlay doesn't interfere with interaction of the content
        zIndex: 2,
    },
}));

// Just the Flex box with Output Modules that sits inside the Output Panel:
export const StyledAIOutputWrapper = styled(Box)(({ theme }) => ({
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    margin: 'auto', // Center horizontally inside its parent
    height: '100%',
    width: '100%',
    // maxWidth: 1200,
}));


export const AIWrapperForVideoMessaging = styled(Box)(({ theme }) => ({
	overflowY: 'auto',
	margin: 'auto', // Center horizontally inside its parent
	height: '100%',
	width: '100%',
	// maxWidth: 1200,
	// paddingRight: theme.spacing(4),
}));

// ----------------------------------------------------------------------------
// Draggable resize handle:

export const ResizeDragHangle = styled(Box)(({ theme }) => ({
    cursor: 'ew-resize',
    display: 'flex',
    width: theme.spacing(2),
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-evenly',
}));

export const ResizeDragHangleVerticalLine = styled('div')(({ theme }) => ({
    width: 4,
    height: 168,
    backgroundImage: 'linear-gradient(to bottom, #C492F4, #2D0083, #C492F4)',
    maskImage: 'radial-gradient(circle 2px, black 100%, transparent 100%)',
    maskSize: '4px 8px', // Dot size and spacing
    maskPosition: 'center',
    maskRepeat: 'repeat-y',
}));

// ----------------------------------------------------------------------------
// CHAT PANEL

// Chat Panel:
export const StyledAIInteractionPanel = styled(Box)(({ theme, dynamicwidth }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(1),
    borderRadius: Number(theme.shape.borderRadius) * 2,
    background: theme.palette.background.gradient,
    position: 'relative',

    // Adjustments for Desktop:
    [theme.breakpoints.up('md')]: {
        overflow: 'initial',
        boxShadow: 'none',
        width: dynamicwidth ? `${dynamicwidth}px` : '400px',
        '&::before': {
            borderRadius: Number(theme.shape.borderRadius) * 2,
            boxShadow: theme.shadows[3],
        },
    },
    // Adjustments for Mobile:
    [theme.breakpoints.down('md')]: {
        flexBasis: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        '&::before': {
            width: '100%',
        },
        '&.chat-panel': {
            borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
            borderBottomRightRadius: Number(theme.shape.borderRadius) * 2,
        },
    },
	/* Kill the inset shadow on the Chat Panel. It's practically not visible, and it creates GUI artifacts 
	   in some cases when resizing the Chat Panel width: */
    // '&::before': {
    //     // Inset shadow along the top, and little bit along bottom as well:
    //     pointerEvents: 'none',
    //     content: '""',
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     width: 'inherit',
    //     height: 'inherit',
    //     borderRadius: 'inherit', // To match the container's border radius
    //     boxShadow: 'inset 0 16px 24px -8px rgba(35, 0, 90, 0.4), inset 0 -4px 8px -4px rgba(35, 0, 90, 0.4)', // Top and bottom shadows        pointerEvents: 'none', // This makes sure the overlay doesn't interfere with interaction of the content
    //     zIndex: 2,
    // },
}));

// AI Helper info at top of Chat Panel:
export const StyledAIInfoWrapper = styled(Box)(({ theme }) => ({
    top: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    backgroundColor: alpha(theme.palette.background.default, 0.3),
    [theme.breakpoints.up('md')]: {
        paddingLeft: 88,
    },
}));

// Just the flex box with Chat Messages inside the Chat Panel,
// INCLUDING empty space where there are no chat messages:
// (This sits around the StyledAIDialogueWrapper.)
export const StyledAIWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    // backgroundColor: 'red',
    height: '100%',
    flexDirection: 'column',
    flexGrow: 1,
    gap: theme.spacing(2),
    overflow: 'hidden',
}));

// Just the flex box with Chat Messages inside the Chat Panel,
// NOT including empty space where there are no chat messages:
export const StyledAIDialogueWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    // 98% so that there is a small gap between the text box and the last message generated
    height: '98%',
    gap: theme.spacing(0),
    paddingRight: theme.spacing(0),
    transition: 'all 0.3s ease-out',
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(255,255,255,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(255,255,255,.25)',
        borderRadius: 10,
    },
    '&:hover': {
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,.5)',
        },
    },
}));

// PROMPT CARDS DRAWER --------------------------------------------------------

// Prompt cards drawer, most outer container:
export const StyledAIPromptsWrapper = styled('div')(({ theme, hasPrompts }) => {
    return {
        bottom: '100%',
        paddingLeft: theme.spacing(1), // 1/2 inset, so it sits between input field edge and chat message edge
        paddingRight: theme.spacing(1), // 1/2 inset, so it sits between chat message edge and input field edge
        zIndex: 1000,
        opacity: hasPrompts ? 1 : 0,
        height: hasPrompts ? 'auto' : 0, // Collapse height when no prompt cards, so the chat messages can use that space instead
        pointerEvents: hasPrompts ? 'initial' : 'none',
        transition: 'all 0.3s ease-out',
    }
});

// Prompt cards open/close button:
export const StyledAIPromptsToggle = styled('div')(({ theme }) => ({
    display: 'block',
    height: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.white, 0.3),
    borderRadius: '4px 4px 0px 0px',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
}));

// Prompt cards drawer inside (?):
export const StyledAIPromptsInner = styled('div')(({ theme, open }) => ({
    // height: open ? 150 : 0,
    maxHeight: open ? 150 : 0,
    overflow: 'hidden',
    transition: 'all 0.3s ease-out',
    // boxShadow: '0 0 5px rgba(0,0,0,0.2)',    // <-- looks better w/o shadow
}));

// Prompt cards drawer:
export const StyledAIPrompts = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    flexGrow: 1,
    padding: `${theme.spacing(0.25)} ${theme.spacing(2)} ${theme.spacing(1)}`,
    backgroundColor: alpha(theme.palette.common.white, 0.3),
    overflowY: 'auto',
    height: '100%',
}));

// Prompt cards inside output cards
export const StyledOutputPrompts = styled(StyledAIPrompts)(({ theme }) => ({
    padding: 0,
}));

// USER INPUT -----------------------------------------------------------------
export const ChatBotInputField = styled(Stack)(({theme}) => ({
    padding: theme.spacing(1),
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: theme.spacing(1),
}))

export const StyledMicIconButton = styled(IconButton)(({theme, isListening}) => ({
    transition: '0.5s ease',
    backgroundColor: isListening ? 'red' : null,
    padding: 0,
    width: '40px',
    height: '40px',
    // border: isListening ? '5px solid #FFB9B1' : '5px solid transparent'
}))

export const StopRecordingButton = styled(IconButton)(({theme, isListening}) => ({
    transition: '0.5s ease',
    backgroundColor: 'red',
}))

export const RecordingMicButton = styled(IconButton)(({theme, isListening}) => ({
    transition: '0.5s ease',
    backgroundColor: 'red',
}))

export const NormalMicButton = styled(IconButton)(({theme, isListening}) => ({
    backgroundColor: 'none',
}))

export const StyledSendIconButton = styled(IconButton)(({theme, messageValue}) => ({
    transition: '0.5s ease',
    backgroundColor: messageValue ? '#46BCA5' : null,
    width: '40px',
    height: '40px',
    border: messageValue ? '5px solid #46BCA5' : '5px solid transparent'
}))

// User input edit field and buttons:
export const StyledTextField = styled(FormControl)(({ theme }) => ({
    color: '#fff',
    borderRadius: '12px',
    '&.active': {
        // border: '4px solid #FF3C5D',
    },
    '& .MuiFilledInput-root': {
        backgroundColor: 'white',
        color: theme.palette.text.primary,
        fontSize: '18px',
        paddingTop: 8,
        borderRadius: theme.spacing(1),
        '&:hover, &.Mui-focused': {
            backgroundColor: '#fff',
        },
            },
    '& .MuiInputLabel-root': {
        color: '#fff',
        '&.Mui-focused': {
            color: '#fff',
        },
    },
    '& .MuiButtonBase-root': {
        transition: '0.5s ease',
        color: theme.palette.text.primary,
        '&:hover': {
            // backgroundColor: 'rgba(0, 0, 0, 0.08)',
            // '& svg': {
            //  color: 'red',
            // }
        },
        '&.active-mic': {
            backgroundColor: '#FFB9B1',
            color: '#fff',
            // '&:hover': {
            //  backgroundColor: '#FFB9B1',
            //  '& svg': {
            //      color: 'white',
            //  }
            // },
            animation: 'pulse-animation 1s infinite',
            '@keyframes pulse-animation': {
                '0%': {
                    // opacity: 0.7,
                    border: '5px solid #FFB9B1',
                    // transform: 'scale(1)',
                    backgroundColor: '#FF3C5D',
                },
                '50%': {
                        // opacity: 1,
                        border: '2.5px solid #FFB9B1',
                        // transform: 'scale(1.1)',
                        backgroundColor: '#FF3C5D',
                },
                '100%': {
                    // opacity: 0.7,
                    border: '5px solid #FFB9B1',
                    // transform: 'scale(1)',
                      backgroundColor: '#FF3C5D',
                },
            },
        },
        '&.loading-mic': {
            backgroundColor: '#FFB9B1',
            '& svg': {
                color: 'white',
            }
        },
        '&.send-message-button': {
            width: '45px',
            height: '45px',
            backgroundColor: '#46BCA5',
            border: '5px solid #92EAC8',
            '&:hover': {
                border: '2.5px solid #92EAC8',
            }
        }
    },
}));

// Wrapper around the user input buttons in input panel (Mic and Send buttons):
export const StyledAIButtonWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100px'
    // gap: theme.spacing(1)
    // gap: theme.spacing(0.5),
    // padding: `${theme.spacing(1)} 0`,
}));

export const StyledAIButton = styled(LoadingButton)(({ theme }) => ({
    width: theme.spacing(5),
    minWidth: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: '50%',
}));

