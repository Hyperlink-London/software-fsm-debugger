// diagram.ts
export const nodes = [
    { id: 'start', type: 'input', position: { x: 250, y: 0 }, data: { label: 'System Started' } },
    { id: 'idle', position: { x: 250, y: 100 }, data: { label: 'Idle' } },
    { id: 'safetyChecks', position: { x: 250, y: 200 }, data: { label: 'Safety Checks' } },
    { id: 'safeToArm', position: { x: 250, y: 300 }, data: { label: 'Safe To Arm' } },
    { id: 'arm', position: { x: 250, y: 400 }, data: { label: 'Arm' } },
    { id: 'acceleration', position: { x: 250, y: 500 }, data: { label: 'Acceleration' } },
    { id: 'cruise', position: { x: 250, y: 600 }, data: { label: 'Cruise' } },
    { id: 'primaryBrake', position: { x: 250, y: 700 }, data: { label: 'Primary Brake' } },
    { id: 'secondaryBrake', position: { x: 250, y: 800 }, data: { label: 'Secondary Brake' } },
    { id: 'fullStop', type: 'output', position: { x: 250, y: 900 }, data: { label: 'Full Stop' } },
    { id: 'safeAbort', type: 'output', position: { x: 500, y: 400 }, data: { label: 'Safe Abort' } },
  ];
  
  export const edges = [
    { id: 'e1-2', source: 'start', target: 'idle' },
    { id: 'e2-3', source: 'idle', target: 'safetyChecks', label: 'Safety Checks Button Pressed' },
    { id: 'e3-4', source: 'safetyChecks', target: 'safeToArm', label: 'Safety Checks Passes' },
    { id: 'e4-5', source: 'safeToArm', target: 'arm', label: 'Arm Button Pressed' },
    { id: 'e5-6', source: 'arm', target: 'acceleration', label: 'Launch Button is Pressed' },
    { id: 'e6-7', source: 'acceleration', target: 'cruise', label: 'Top Speed is Reached' },
    { id: 'e7-8', source: 'cruise', target: 'primaryBrake', label: 'Braking Waypoint is Reached' },
    { id: 'e8-9', source: 'primaryBrake', target: 'secondaryBrake', label: 'Speed < Brake Speed' },
    { id: 'e9-10', source: 'secondaryBrake', target: 'fullStop', label: 'Speed = 0' },
    { id: 'abort1', source: 'idle', target: 'safeAbort', label: 'ABORT Pressed' },
    { id: 'abort2', source: 'safetyChecks', target: 'safeAbort', label: 'ABORT Pressed' },
    { id: 'abort3', source: 'safeToArm', target: 'safeAbort', label: 'ABORT Pressed' },
    { id: 'abort4', source: 'arm', target: 'safeAbort', label: 'ABORT Pressed' },
    { id: 'abort5', source: 'acceleration', target: 'safeAbort', label: 'ABORT Pressed OR Fault Condition Detected' },
  ];
  