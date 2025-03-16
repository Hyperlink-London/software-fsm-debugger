import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';
import { nodes } from '../data/fsm_diagram';

export const initialNodes: AppNode[] = nodes as unknown as AppNode[];;

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
};
