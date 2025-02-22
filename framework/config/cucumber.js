module.exports = {
  default: {
    tags: process.env.npm_config_tags || '',
    formatOptions: {
      snippetInterface: 'async-await',
    },
    paths: ['features/'],
    publishQuiet: false,
    dryRun: false,
    require: ['features/steps/*.ts', 'framework/hooks/hooks.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json',
      'rerun:@rerun.txt',
    ],
    parallel: +process.env.npm_config_parallel || 3,
  },
  rerun: {
    formatOptions: {
      snippetInterface: 'async-await',
    },
    publishQuiet: true,
    dryRun: false,
    require: ['features/steps/*.ts', 'framework/hooks/hooks.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json',
      'rerun:@rerun.txt',
    ],
    parallel: 2,
  },
};
