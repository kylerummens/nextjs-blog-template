import { extendTheme } from "@mui/joy";

export const bh_theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    plainColor: 'var(--joy-palette-primary-solidBg)'
                },
                neutral: {
                    solidBg: 'rgb(30 41 59)',
                    solidHoverBg: 'rgb(30 41 59)',
                    solidActiveBg: 'rgb(30 41 59)'
                }
            }
        }
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: '99999px',
                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    '&:focus': {
                        outline: '2px solid transparent',
                        outlineOffset: '2px',
                        boxShadow: '0 0 0 2px #ffffff, 0 0 0 4px #93c5fd, 0 0 #0000'
                    },
                }),
            },
        },
    },
    fontFamily: {
        display: 'Inter var, var(--joy-fontFamily-fallback)',
        body: 'Inter, var(--joy-fontFamily-fallback)',
    },
})