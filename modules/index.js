import { initializeApp, currentState, codeEditor, initialContentEditor } from 'https://gitdev.wuaze.com/modules/core.js';
import { eventListeners } from 'https://gitdev.wuaze.com/modules/listeners.js';
import { LoadingProgress } from 'https://gitdev.wuaze.com/modules/router.js';



window.showCreateRepoModal = () => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.showCreateRepoModal());
window.hideCreateRepoModal = () => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.hideCreateRepoModal());
window.showCreateFileModal = () => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.showCreateFileModal());
window.hideCreateFileModal = () => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.hideCreateFileModal());
window.showDeleteFileModal = () => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.showDeleteFileModal());
window.hideDeleteFileModal = () => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.hideDeleteFileModal());
window.createRepository = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.createRepository());
window.createFile = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.createFile());
window.confirmDeleteFile = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.confirmDeleteFile());
window.deleteRepository = (repoName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.deleteRepository(repoName));
window.openRepository = (repoName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.openRepository(repoName));
window.viewFile = (filename) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.viewFile(filename));
window.editFile = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.editFile());
window.saveFile = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.saveFile());
window.downloadCurrentFile = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.downloadCurrentFile());
window.previewFile = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.previewFile());
window.showRepoSelector = () => import('https://gitdev.wuaze.com/modules/router.js').then(m => m.showRepoSelector());
window.showExplorer = () => import('https://gitdev.wuaze.com/modules/router.js').then(m => m.showExplorer());
window.showFileViewer = () => import('https://gitdev.wuaze.com/modules/router.js').then(m => m.showFileViewer());
window.showFileEditor = () => import('https://gitdev.wuaze.com/modules/router.js').then(m => m.showFileEditor());
window.navigateToRoot = () => import('https://gitdev.wuaze.com/modules/router.js').then(m => m.navigateToRoot());
window.navigateToPath = (path) => import('https://gitdev.wuaze.com/modules/router.js').then(m => m.navigateToPath(path));
window.addTag = () => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.addTag());
window.removeTag = (tag) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.removeTag(tag));
window.viewFileFromContext = (fileName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.viewFileFromContext(fileName));
window.editFileFromContext = (fileName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.editFileFromContext(fileName));
window.downloadFileFromContext = (fileName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.downloadFileFromContext(fileName));
window.deleteFileFromContext = (fileName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.deleteFileFromContext(fileName));
window.openRecentFile = (repoName, filePath, fileName) => import('https://gitdev.wuaze.com/modules/core.js').then(m => m.openRecentFile(repoName, filePath, fileName));
window.showContextMenu = (x, y, fileName, fileType) => import('https://gitdev.wuaze.com/modules/overlays.js').then(m => m.showContextMenu(x, y, fileName, fileType));

// Expose global state for debugging
window.currentState = currentState;
window.codeEditor = codeEditor;
window.initialContentEditor = initialContentEditor;
window.LoadingProgress = LoadingProgress;
window.eventListeners = eventListeners;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            initializeApp();
        }, 100);
    });
} else {
    setTimeout(() => {
        initializeApp();
    }, 100);
}