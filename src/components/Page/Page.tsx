import { Box, BoxProps, SystemStyleObject } from '@chakra-ui/react'
import { StyleMap } from '../../common/style'
import { selectPage, useAppSelector } from '../../redux'

/**
 * Page.
 */
export function Page(props: pageProps) {
    const { children, page, outerStyle, innerStyle } = props
    const currentPage: PageEnum = useAppSelector(selectPage)
    const styles: StyleMap = {
        outer: {
            display: currentPage === page ? 'flex' : 'none',
            margin: '0 !important',
            padding: '0 !important',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            ...outerStyle,
        },
        inner: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '75vh',
            height: '100%',
            margin: '0 auto',
            ...innerStyle,
        },
    }

    return (
        <Box sx={styles.outer}>
            <Box sx={styles.inner}>
                {children}
            </Box>
        </Box>
    )
}

/**
 * Page properties.
 */
export interface pageProps extends BoxProps {
    page: PageEnum
    outerStyle?: SystemStyleObject
    innerStyle?: SystemStyleObject
}

/**
 * Page enumeration.
 */
export enum PageEnum {
    PORTAL = 0,
    GAME_SELECTION = 1,
    GAME_SETTINGS = 2,
    CLOCK = 3,
    APP_SETTINGS = 4
}

/**
 * Default page.
 */
export const DEFAULT_PAGE = PageEnum.PORTAL