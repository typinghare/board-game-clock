import React from 'react'
import { Panel, PanelProps } from './Panel'
import { Box } from '@mui/material'
import { ClockDisplay } from './ClockDisplay'
import { useAppSelector } from '../redux/hooks'
import { selectGameStarted } from '../redux/slice/GameSlice'
import { Game, StandardGameHolder } from '@typinghare/board-game-clock-core'
import { globalGameHolder } from '../common/games'

export const ClockPanel: React.FC<PanelProps> = function(props): JSX.Element {
    const { isDisplay } = props

    // If the game has not been started, display nothing.
    if (!useAppSelector(selectGameStarted)) {
        return <Panel isDisplay={isDisplay} />
    }

    // Retrieve the game from the game holder.
    const gameHolder: StandardGameHolder | undefined = globalGameHolder.content
    if (gameHolder === undefined) {
        return <Panel isDisplay={isDisplay}>
            <Box> Global game holder in empty.</Box>
        </Panel>
    }

    const game: Game = gameHolder!.game

    const styles = {
        section: { flex: 12 },
        ribbon: { flex: 1, backgroundColor: '#333333' },
    }

    return <Panel isDisplay={isDisplay}>
        <Box sx={styles.section}>
            <ClockDisplay game={game} role='A' overturn />
        </Box>
        <Box sx={styles.ribbon} />
        <Box sx={styles.section}>
            <ClockDisplay game={game} role='B' />
        </Box>
    </Panel>
}

