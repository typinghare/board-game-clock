import React, { FunctionComponent } from 'react';
import { AgentManager, AgentPosition } from '../../logic/AgentManager';
import { Box } from '@mui/material';
import { ClockDisplay } from '../../component/clock_display/ClockDisplay';
import './ClockPanel.css';
import { useAppDispatch } from '../../redux/hooks';
import { clockRun, switchAgent } from '../../redux/slice/GameSlice';
import { PanelProps } from '../app/App';

export type ClockPanelProps = PanelProps & {};

export const ClockPanel: FunctionComponent<ClockPanelProps> = (props: ClockPanelProps) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(clockRun(AgentPosition.A.toString()));
  }, [dispatch]);

  const onClickSectionProvider = (agentPosition: AgentPosition) => {
    return () => {
      const agentManager = AgentManager.getInstance();
      if (agentManager.game?.isRunning(agentPosition)) {
        dispatch(switchAgent());
      }
    };
  };

  return <Box className='ClockPanel' sx={{ display: props.isShow ? 'flex' : 'none' }}>
    <Box className='ClockPanelSectionB' onClick={onClickSectionProvider(AgentPosition.B)}>
      <ClockDisplay agentPosition={AgentPosition.B} overturn />
    </Box>
    <Box className='ClockPanelRibbon'></Box>
    <Box className='ClockPanelSectionA' onClick={onClickSectionProvider(AgentPosition.A)}>
      <ClockDisplay agentPosition={AgentPosition.A} />
    </Box>
  </Box>;
};
