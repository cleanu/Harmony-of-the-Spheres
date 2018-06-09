import jovianSystem from './jovianSystem';
import threeBodyCoreography from './threeBodyCoreography';
import earthMoonSystem from './earthMoonSystem';
import oumuamua from './oumuamua';

export const scenarios = [
  jovianSystem,
  threeBodyCoreography,
  earthMoonSystem,
  oumuamua
];

export default function(scenario) {
  const selectedScenario = scenarios.filter(
    entry => entry.name.indexOf(scenario) > -1
  );

  return JSON.parse(JSON.stringify(selectedScenario[0]));
}
