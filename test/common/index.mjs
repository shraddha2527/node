import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const common = require('./index.js');

const {
  allowGlobals,
  buildType,
  canCreateSymLink,
  checkoutEOL,
  childShouldThrowAndAbort,
  createZeroFilledFile,
  enoughTestMem,
  expectsError,
  expectWarning,
  getArrayBufferViews,
  getBufferSources,
  getCallSite,
  getTTYfd,
  hasCrypto,
  hasIPv6,
  hasMultiLocalhost,
  isAIX,
  isAlive,
  isDumbTerminal,
  isFreeBSD,
  isIBMi,
  isLinux,
  isLinuxPPCBE,
  isMainThread,
  isOpenBSD,
  isOSX,
  isSunOS,
  isWindows,
  localIPv6Hosts,
  mustCall,
  mustCallAtLeast,
  mustNotCall,
  mustNotMutateObjectDeep,
  mustSucceed,
  nodeProcessAborted,
  opensslCli,
  parseTestFlags,
  PIPE,
  platformTimeout,
  printSkipMessage,
  runWithInvalidFD,
  skip,
  skipIf32Bits,
  skipIfDumbTerminal,
  skipIfEslintMissing,
  skipIfInspectorDisabled,
  skipIfWorker,
  spawnPromisified,
} = common;

const getPort = () => common.PORT;

export {
  allowGlobals,
  buildType,
  canCreateSymLink,
  checkoutEOL,
  childShouldThrowAndAbort,
  createRequire,
  createZeroFilledFile,
  enoughTestMem,
  expectsError,
  expectWarning,
  getArrayBufferViews,
  getBufferSources,
  getCallSite,
  getPort,
  getTTYfd,
  hasCrypto,
  hasIPv6,
  hasMultiLocalhost,
  isAIX,
  isAlive,
  isDumbTerminal,
  isFreeBSD,
  isIBMi,
  isLinux,
  isLinuxPPCBE,
  isMainThread,
  isOpenBSD,
  isOSX,
  isSunOS,
  isWindows,
  localIPv6Hosts,
  mustCall,
  mustCallAtLeast,
  mustNotCall,
  mustNotMutateObjectDeep,
  mustSucceed,
  nodeProcessAborted,
  opensslCli,
  parseTestFlags,
  PIPE,
  platformTimeout,
  printSkipMessage,
  runWithInvalidFD,
  skip,
  skipIf32Bits,
  skipIfDumbTerminal,
  skipIfEslintMissing,
  skipIfInspectorDisabled,
  skipIfWorker,
  spawnPromisified,
};
