import type { Edge, EdgeTypes } from '@xyflow/react';
import edgesData from '../data/edges.json';

export const initialEdges: Edge[] = edgesData;

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
