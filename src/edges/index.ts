import type { Edge, EdgeTypes } from '@xyflow/react';
import { edges } from '../data/fsm_diagram';

export const initialEdges: Edge[] = edges;

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
