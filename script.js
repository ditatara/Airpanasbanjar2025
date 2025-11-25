(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "start": "this.init(); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList])",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "children": [
  "this.MainViewer",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5",
  "this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF",
  "this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "defaultVRPointer": "laser",
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "100%",
 "downloadEnabled": false,
 "shadow": false,
 "gap": 10,
 "class": "Player",
 "paddingRight": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "overflow": "visible",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4AACDA4_BB07_DEAC_41E0_EB6759539600"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.83,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6EE7BD2_BB07_DAE4_41E0_BF4AF9823616"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -91.02,
   "backwardYaw": 91.01,
   "distance": 1,
   "panorama": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.44,
   "backwardYaw": -87.17,
   "distance": 1,
   "panorama": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35"
  }
 ],
 "hfov": 360,
 "id": "panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
 "thumbnailUrl": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_t.jpg",
 "label": "Parking and Locket 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0DDA9A1E_21C5_78E4_41B6_52E741821527",
  "this.overlay_0DE9FDD4_21C7_1B64_418A_FE9AA4D1E390"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592622D9_4F5F_9C05_41B2_338DC5475EF6",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AB3EBE1A_BB07_DD64_41B0_9114A91AD4D8"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 145.34,
   "backwardYaw": 91.49,
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  }
 ],
 "hfov": 360,
 "id": "panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
 "thumbnailUrl": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_t.jpg",
 "label": "Pool View From Above",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_37005C7B_205F_192C_41C0_594EF5139986",
  "this.overlay_43DD0D02_57DC_1E9F_41D5_48D8B0BBE855",
  "this.popup_44386CFD_57DC_1F65_41C6_217032E0F7CB"
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.01,
 "id": "popup_4319B2E6_57D4_0B67_41B0_3843AA27B954",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4319B2E6_57D4_0B67_41B0_3843AA27B954_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -37.04,
 "yaw": -90.06,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6F8FBB4_BB07_DAA3_41E4_E1B98043E487"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 106.52,
   "backwardYaw": -69.79,
   "distance": 1,
   "panorama": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -75.68,
   "backwardYaw": 119.4,
   "distance": 1,
   "panorama": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925"
  }
 ],
 "hfov": 360,
 "id": "panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
 "thumbnailUrl": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_t.jpg",
 "label": "Entrance 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_30120C99_2045_19EC_41B3_E37C8761647E",
  "this.overlay_32DE9587_2043_0BE5_41A1_7F9A93F1829E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5FC5CC7_BB07_DEEC_41D7_1E61E3023F81"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4332189_DE42_B570_41DA_7335441D6620_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D4B9485_59D4_0D5A_41CE_140EE8A4EDE5",
 "levels": [
  {
   "url": "media/popup_427C5310_57D4_0ABB_41CE_8175CFF7561E_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_427C5310_57D4_0ABB_41CE_8175CFF7561E_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_427C5310_57D4_0ABB_41CE_8175CFF7561E_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D433480_59D4_0D5A_41D3_CEB9D444A925",
 "levels": [
  {
   "url": "media/popup_43422759_57DC_0AAD_41C2_33AE13B80D86_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_43422759_57DC_0AAD_41C2_33AE13B80D86_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_43422759_57DC_0AAD_41C2_33AE13B80D86_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C62319B_316E_FC34_41C2_4469B1E05F86",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5D13CA7_BB07_DEAC_41DE_BBD6EE74C657"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -133.76,
   "backwardYaw": -148.51,
   "distance": 1,
   "panorama": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925"
  }
 ],
 "hfov": 360,
 "id": "panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
 "thumbnailUrl": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_t.jpg",
 "label": "Entrance 5",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_31221300_204D_08DB_41A4_F1F299981C40"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D35C48C_59D4_0D6A_41D4_099452BFF4C9",
 "levels": [
  {
   "url": "media/popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_AB596E3C_BB07_DD9C_41D8_8B997E13C926",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.93,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AB281E24_BB07_DDAC_41CC_7458A46F4A45"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6E0FA18_BB07_2564_41C7_DF307C905D37"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_AB592E3C_BB07_DD9C_41D1_2CA3B2BE7A0B",
 "easing": "cubic_in_out"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Drone View 4",
 "id": "panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
 "thumbnailUrl": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_t.jpg",
 "hfovMin": "120%",
 "pitch": 0
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.25,
 "id": "popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -53.44,
 "yaw": 66.12,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5925F2D9_4F5F_9C05_41A6_F61449698672",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4154425_DE46_73B3_41E3_24B4CB004799_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.41,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5AA5C9B_BB07_DD64_41DA_B489DAB5A9B8"
},
{
 "class": "ImageResource",
 "id": "ImageResource_20AE00CD_3121_9FE6_41C0_CF097421C5DC",
 "levels": [
  {
   "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.06,
 "id": "popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -35.85,
 "yaw": 51.76,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B40BDCE6_BB07_DEAC_41E5_E855249CECB6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5C32CB3_BB07_DEA4_41DF_899485A4BA99"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 27.32,
   "backwardYaw": -74.07,
   "distance": 1,
   "panorama": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -69.69,
   "backwardYaw": 157.62,
   "distance": 1,
   "panorama": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D"
  }
 ],
 "hfov": 360,
 "id": "panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
 "thumbnailUrl": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_t.jpg",
 "label": "Office and Bridge",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0595202E_21C5_0927_41B9_13750AE1712B",
  "this.overlay_04E6CAD5_21DF_7964_41B9_068AFF60DD7A"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.45,
 "id": "popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -24.11,
 "yaw": -40.84,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B46D6D4E_BB07_DFFD_41E0_097061E080BF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 157.92,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4C77DDA_BB07_DEE4_41A1_09103D623B94"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 48.19,
   "backwardYaw": 16.78,
   "distance": 1,
   "panorama": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -74.07,
   "backwardYaw": 27.32,
   "distance": 1,
   "panorama": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C"
  }
 ],
 "hfov": 360,
 "id": "panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A",
 "thumbnailUrl": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_t.jpg",
 "label": "Office",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0275B519_21C7_08EC_41BC_0BB5A102A904",
  "this.overlay_02E48CBC_21C7_1924_41BC_CB2B469180CB"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_409EC681_57CC_0B9C_41C5_385E07E9344A",
 "levels": [
  {
   "url": "media/popup_464DF088_57FC_07AB_41D4_560017AB0BBA_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_464DF088_57FC_07AB_41D4_560017AB0BBA_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_464DF088_57FC_07AB_41D4_560017AB0BBA_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_AB75BE4B_BB07_DDE4_41AA_F6545DB318D1",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.48,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B52B8AB2_BB07_DAA4_41A7_1D8333BB0455"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 0)",
   "media": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B57AEC50_BB07_DDE4_41C1_F46FB254BA17"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5855B2E_BB07_DBBC_41A3_34A99FFAA1A3"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.45,
 "id": "popup_43112D81_57DC_399D_41B5_AFB08C479374",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43112D81_57DC_399D_41B5_AFB08C479374_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -24.01,
 "yaw": -13.51,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.25,
 "id": "popup_44386CFD_57DC_1F65_41C6_217032E0F7CB",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_44386CFD_57DC_1F65_41C6_217032E0F7CB_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -30.64,
 "yaw": -86.19,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_AB4A7E42_BB07_DDE4_41D0_215761E823EA",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4356CF3_BB07_DEA4_41E3_4B0F47DA6E47"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.37,
   "backwardYaw": 126.64,
   "distance": 1,
   "panorama": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 157.62,
   "backwardYaw": -69.69,
   "distance": 1,
   "panorama": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C"
  }
 ],
 "hfov": 360,
 "id": "panorama_D414C304_DE46_9570_41E8_C12BB201207D",
 "thumbnailUrl": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_t.jpg",
 "label": "Briedge View to Jacuzi and Spa",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_08FC0D31_21DD_FB3D_41A6_748ADDF328FD",
  "this.overlay_04A60F3E_21DF_1727_41BB_9F7357F4831B"
 ]
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C6211A3_316E_FC14_41B8_E61760C15732",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -162.19,
   "backwardYaw": -149.06,
   "distance": 1,
   "panorama": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758"
  }
 ],
 "hfov": 360,
 "id": "panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
 "thumbnailUrl": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_t.jpg",
 "label": "Pelinggih 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3514D4C6_2047_0964_4182_9857941DBE94"
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.54,
 "id": "popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -40.68,
 "yaw": -97.98,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D47A484_59D4_0D5A_41C7_242DFC9DB24D",
 "levels": [
  {
   "url": "media/popup_43112D81_57DC_399D_41B5_AFB08C479374_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_43112D81_57DC_399D_41B5_AFB08C479374_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_43112D81_57DC_399D_41B5_AFB08C479374_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.26,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B54EBC46_BB07_DDEC_41BA_737E142F9526"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.94,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5300A7D_BB07_259C_4189_EE55D6D65258"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5C27B5C_BB07_DB9C_41D0_1F53640D4B5A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.95,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4D5CDC6_BB07_DEEC_41D1_89A5EEDE8706"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 127.34,
   "backwardYaw": -155.38,
   "distance": 1,
   "panorama": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 34.74,
   "backwardYaw": -154.58,
   "distance": 1,
   "panorama": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
 "thumbnailUrl": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_t.jpg",
 "label": "Security Post",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_032BEAD8_21CF_396C_41A1_B3BA75F76CCE",
  "this.overlay_0282E82B_21CD_392C_41B6_108A08846FAE"
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.77,
 "id": "popup_43422759_57DC_0AAD_41C2_33AE13B80D86",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43422759_57DC_0AAD_41C2_33AE13B80D86_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 3.09,
 "yaw": -72.51,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6F6CBA8_BB07_DAA4_41D6_23DB10BEF9A5"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.78,
 "id": "popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 0.3,
 "yaw": -65.58,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.57,
 "id": "popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -15.84,
 "yaw": 15.64,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 39.14,
   "backwardYaw": 32.79,
   "distance": 1,
   "panorama": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758"
  }
 ],
 "hfov": 360,
 "id": "panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
 "thumbnailUrl": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_t.jpg",
 "label": "Pelinggih 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_36CD586A_2047_192C_41B8_B9D9015D1232",
  "this.overlay_43F2D668_57DC_0B6B_4199_0CD455B40638",
  "this.popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')){ if(this.getKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')) { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_AB453E42_BB07_DDE4_41E1_297087ADFA2B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5'); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C62319B_316E_FC34_41C2_4469B1E05F86, 'hideEffect', false); if(this.existsKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')){ if(this.getKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')) { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_AB459E42_BB07_DDE4_41E3_45AA4F59F316, 'showEffect', false); } else { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')",
   "camera": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
   "begin": "this.registerKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B', this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.get('visible')); this.registerKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5', this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.get('visible')); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false)",
   "media": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')){ if(this.getKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')) { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_AB4A7E42_BB07_DDE4_41D0_215761E823EA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')",
   "camera": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
   "begin": "this.registerKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF', this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false)",
   "media": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7, 'hideEffect', false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4, 'hideEffect', false)",
   "camera": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 0); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592622D9_4F5F_9C05_41B2_338DC5475EF6, 'hideEffect', false)",
   "media": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -146.47,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B489BD7A_BB07_DFA4_41E1_B3885702F098"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.71,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5D02B50_BB07_DBE4_41DE_E9133DACBC8D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.51,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5688B16_BB07_DB6C_41BA_5CEAC156013C"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 103.46,
   "backwardYaw": -80.18,
   "distance": 1,
   "panorama": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4154425_DE46_73B3_41E3_24B4CB004799",
 "thumbnailUrl": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_t.jpg",
 "label": "From Ouside",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_135577A5_21C3_1724_41A3_354120217681"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D233492_59D4_0D7E_41B9_F5C8FE5DBD73",
 "levels": [
  {
   "url": "media/popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -59.14,
   "backwardYaw": 111.11,
   "distance": 1,
   "panorama": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 140.4,
   "backwardYaw": -109,
   "distance": 1,
   "panorama": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72"
  }
 ],
 "hfov": 360,
 "id": "panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
 "thumbnailUrl": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_t.jpg",
 "label": "Entrance 1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_2FC651CC_205F_0B64_41B6_94A1A42EB03B",
  "this.overlay_124250F9_21C5_092C_41BB_278B80E3CD00"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6E2BBBE_BB07_DA9C_41C1_F08080626116"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5013BFD_BB07_DA9C_41E2_0B1983CAFEC2"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.84,
   "backwardYaw": -73.69,
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 24.74,
   "backwardYaw": -56.29,
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfov": 360,
 "id": "panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
 "thumbnailUrl": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_t.jpg",
 "label": "Main Pool View 5",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3CAD5E04_2045_78E4_41B2_0B8F0BCE57B2",
  "this.overlay_3DB395EE_2047_0B24_41B1_4F90FE1495BF",
  "this.overlay_470D5FAE_57FC_19E7_41D0_B26170E0084D",
  "this.popup_4622D162_57FC_069C_41C0_270D8DCB0256",
  "this.overlay_42C5B39B_57D4_09AD_41D2_B27564515B55",
  "this.popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0",
  "this.overlay_439F0433_57D4_0EFC_41C3_751893D30A9C",
  "this.popup_4319B2E6_57D4_0B67_41B0_3843AA27B954"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D4DC486_59D4_0D67_41C7_1D4617F9F3A1",
 "levels": [
  {
   "url": "media/popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.36,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5CD7CBD_BB07_DE9C_41E5_73F4E972504C"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D4A8485_59D4_0D5A_41C4_FAAF3BC0728E",
 "levels": [
  {
   "url": "media/popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 120.23,
   "backwardYaw": -73.53,
   "distance": 1,
   "panorama": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -149.06,
   "backwardYaw": -162.19,
   "distance": 1,
   "panorama": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.79,
   "backwardYaw": 39.14,
   "distance": 1,
   "panorama": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED"
  }
 ],
 "hfov": 360,
 "id": "panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
 "thumbnailUrl": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_t.jpg",
 "label": "Pelinggih",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3494235E_2045_0F64_41C0_63E8DD68B75D",
  "this.overlay_35EA864E_2045_0964_41AB_1AC47E06F490",
  "this.overlay_3531262E_2045_0924_41B5_40FBE8112F5C",
  "this.overlay_44F8334D_57D4_0AA5_41BE_5E40BC25934C",
  "this.popup_43422759_57DC_0AAD_41C2_33AE13B80D86"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6EA3A21_BB07_25A7_41DC_6C5ECCB187E9"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.35,
 "id": "popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -27.4,
 "yaw": -55.13,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 16.78,
   "backwardYaw": 48.19,
   "distance": 1,
   "panorama": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -155.38,
   "backwardYaw": 127.34,
   "distance": 1,
   "panorama": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE",
 "thumbnailUrl": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_t.jpg",
 "label": "Locker and Changing Room",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0290164E_21C3_0964_41AA_98959C5DBCED",
  "this.overlay_0544DFC6_21C5_F764_41C0_49CBBC0ED9CF",
  "this.overlay_4CAA486F_59FC_05A4_41B6_BB838057DCC3",
  "this.popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806",
  "this.overlay_4CBC323D_59FC_05A7_41A2_2CE08F59C10A",
  "this.popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_409DB682_57CC_0B9C_41D4_AFFF880B8F4B",
 "levels": [
  {
   "url": "media/popup_4622D162_57FC_069C_41C0_270D8DCB0256_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4622D162_57FC_069C_41C0_270D8DCB0256_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4622D162_57FC_069C_41C0_270D8DCB0256_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.16,
 "id": "popup_234730B3_3121_9FA2_41A3_51297DD76840",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -15,
 "yaw": -19.28,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D33B48A_59D4_0D6E_41D0_6AD9439FE53E",
 "levels": [
  {
   "url": "media/popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D38E48D_59D4_0D6A_41CC_3E03726A8CDD",
 "levels": [
  {
   "url": "media/popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.49,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AB0FEE10_BB07_DD64_41E1_9BA764696BBA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.86,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B53EBA98_BB07_2564_41DA_4A6179C7965E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.86,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B579EB0D_BB07_DB7C_41E4_1E6E0C983058"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 0)",
   "media": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6F9FA0A_BB07_2564_419A_0205A8EEF8F4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.06,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B440CD18_BB07_DF64_41CF_BA228F4F9351"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.6,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6CD9B9B_BB07_DB64_41CE_1BD790EA9AD8"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D306487_59D4_0D65_41C1_D040E66B2FB4",
 "levels": [
  {
   "url": "media/popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.4,
   "backwardYaw": -75.68,
   "distance": 1,
   "panorama": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.51,
   "backwardYaw": -133.76,
   "distance": 1,
   "panorama": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -65.23,
   "backwardYaw": 108.66,
   "distance": 1,
   "panorama": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599"
  }
 ],
 "hfov": 360,
 "id": "panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
 "thumbnailUrl": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_t.jpg",
 "label": "Entrance 4",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_316F9A97_2043_79E4_41BA_CE4E5EF442CF",
  "this.overlay_324636E8_204D_092B_41AE_09FF0120DBB9",
  "this.overlay_1498993A_21C7_3B2F_41B8_9AED007680D9"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.82,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4E3BDF0_BB07_DEA4_41D1_EE40516B54F5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 85.43,
   "backwardYaw": -89.91,
   "distance": 1,
   "panorama": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -73.89,
   "backwardYaw": 75.06,
   "distance": 1,
   "panorama": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72"
  }
 ],
 "hfov": 360,
 "id": "panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
 "thumbnailUrl": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_t.jpg",
 "label": "Road to Hotspring 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_11AB6BD3_21FF_7F7C_41A5_3BC8E1DF8264",
  "this.overlay_1030B0CB_21FF_096C_4193_02BB80DDB85B"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_AB459E42_BB07_DDE4_41E3_45AA4F59F316",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B542AC3D_BB07_DD9C_41E2_0C31365E64FF"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -54.59,
   "backwardYaw": -5.51,
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.83,
   "backwardYaw": -157.01,
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3"
  }
 ],
 "hfov": 360,
 "id": "panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
 "thumbnailUrl": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_t.jpg",
 "label": "Main Pool View 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3A544A2B_204F_192D_41B9_4B675F2083E1",
  "this.overlay_3B7025CD_204D_0B64_41BF_FE9295551BB0",
  "this.overlay_42DBCFD4_57D4_F9BB_4193_08274DBC880A",
  "this.popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Dry Jacuzi",
 "id": "panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
 "thumbnailUrl": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_t.jpg",
 "hfovMin": "135%",
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.6,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5001A5C_BB07_259C_41D3_BACE467ACBF1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.39,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4702D24_BB07_DFAC_41D3_EA76332ADBBB"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 106.11,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B50BFA68_BB07_25A4_41C8_76AE006C66CD"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.68,
 "id": "popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -13.08,
 "yaw": 112.26,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 106.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5A19B42_BB07_DBE4_41E3_E5D44700B6E2"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')){ if(this.getKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')) { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_AB596E3C_BB07_DD9C_41D8_8B997E13C926, 'showEffect', false); } else { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5'); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C62319B_316E_FC34_41C2_4469B1E05F86, 'hideEffect', false); if(this.existsKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')){ if(this.getKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')) { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_AB592E3C_BB07_DD9C_41D1_2CA3B2BE7A0B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')",
   "camera": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
   "begin": "this.registerKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B', this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.get('visible')); this.registerKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5', this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false)",
   "media": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C, 'hideEffect', false)",
   "camera": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74, 'showEffect', false)",
   "media": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')){ if(this.getKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')) { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_AB414E40_BB07_DDE4_4158_78655ED79160, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')",
   "camera": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
   "begin": "this.registerKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF', this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')); this.setEndToItemIndex(this.mainPlayList, 33, 34); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false)",
   "media": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7, 'hideEffect', false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4, 'hideEffect', false)",
   "camera": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592622D9_4F5F_9C05_41B2_338DC5475EF6, 'hideEffect', false)",
   "media": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8, 'hideEffect', false)",
   "camera": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592562D9_4F5F_9C05_41BC_80B57D556509, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925F2D9_4F5F_9C05_41A6_F61449698672, 'hideEffect', false)",
   "media": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE, 'hideEffect', false)",
   "camera": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61, 'hideEffect', false)",
   "media": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_2C6211A3_316E_FC14_41B8_E61760C15732, 'hideEffect', false)",
   "camera": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5, 'showEffect', false)",
   "media": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61F1A3_316E_FC14_41C0_42342C4F5761, 'hideEffect', false)",
   "camera": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61E1A3_316E_FC14_4161_88D26C3E099E, 'showEffect', false)",
   "media": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "media": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 0)",
   "media": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 70.76,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5571AD1_BB07_DAE4_41DC_4C211B29163B"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.29,
 "id": "popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -29.52,
 "yaw": -74.59,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 117.98,
   "backwardYaw": -77.42,
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -73.53,
   "backwardYaw": 120.23,
   "distance": 1,
   "panorama": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.38,
   "backwardYaw": -2.25,
   "distance": 1,
   "panorama": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4332189_DE42_B570_41DA_7335441D6620",
 "thumbnailUrl": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_t.jpg",
 "label": "Main Area 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_34D5401F_204D_08E4_41BD_EA7488B1C803",
  "this.overlay_347CACD1_2043_397C_41B2_CD491F42711A",
  "this.overlay_0162DAFD_21C5_3924_41AE_E2FEF2F7BD9D"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C61E1A3_316E_FC14_4161_88D26C3E099E",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592562D9_4F5F_9C05_41BC_80B57D556509",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B51EDA4F_BB07_25FC_41B3_1C64236C1F27"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C6231A3_316E_FC14_41CC_84C78654F25B",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -42.66,
   "backwardYaw": 60.94,
   "distance": 1,
   "panorama": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -157.62,
   "backwardYaw": 92.61,
   "distance": 1,
   "panorama": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 126.64,
   "backwardYaw": -4.37,
   "distance": 1,
   "panorama": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
 "thumbnailUrl": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_t.jpg",
 "label": "Jakuzi and Spa Intersection",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_07B25F7C_21DD_1724_4174_153423197FB4",
  "this.overlay_06113723_21C3_08DC_41B9_9E54DAB03D79",
  "this.overlay_06B606A7_21C5_0924_41BF_805477E35F89",
  "this.overlay_0AC75EBA_21CD_392C_41A3_E474B7B1A2BF",
  "this.overlay_4D0292B4_59CC_0ABB_4189_06417570618C",
  "this.popup_4E35B964_59CC_07DB_41CE_32EF01E170AE"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D224491_59D4_0D7A_41AD_8282D5B3D2EA",
 "levels": [
  {
   "url": "media/popup_4EE0591F_59F4_0764_41D4_29AFF9440914_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4EE0591F_59F4_0764_41D4_29AFF9440914_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4EE0591F_59F4_0764_41D4_29AFF9440914_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D450483_59D4_0D5E_41C1_249919C994C3",
 "levels": [
  {
   "url": "media/popup_44386CFD_57DC_1F65_41C6_217032E0F7CB_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_44386CFD_57DC_1F65_41C6_217032E0F7CB_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_44386CFD_57DC_1F65_41C6_217032E0F7CB_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.89,
 "id": "popup_464DF088_57FC_07AB_41D4_560017AB0BBA",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_464DF088_57FC_07AB_41D4_560017AB0BBA_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -19.82,
 "yaw": -34.37,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.32,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B59A1B23_BB07_DBA4_41D5_A63950E13AA2"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -109.24,
   "backwardYaw": -74.23,
   "distance": 1,
   "panorama": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 116.05,
   "backwardYaw": -93.69,
   "distance": 1,
   "panorama": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508"
  }
 ],
 "hfov": 360,
 "id": "panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
 "thumbnailUrl": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_t.jpg",
 "label": "Jakuzi 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_085B0A2F_21CD_1924_41A1_17329E4EC9C1",
  "this.overlay_0B76FC2A_21CF_192F_41BF_4CB9EBF1A05C",
  "this.overlay_4D8C9758_59F4_0BEC_41C0_AB80AAF1E278",
  "this.popup_4EE0591F_59F4_0764_41D4_29AFF9440914"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')){ if(this.getKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')) { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_AB4DAE46_BB07_DDEC_41B4_59B97A98F921, 'showEffect', false); } else { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5'); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C62319B_316E_FC34_41C2_4469B1E05F86, 'hideEffect', false); if(this.existsKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')){ if(this.getKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')) { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_AB726E47_BB07_DDEC_4193_D7D3A6111A7B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')",
   "camera": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
   "begin": "this.registerKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B', this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.get('visible')); this.registerKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5', this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.get('visible')); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false)",
   "media": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C, 'hideEffect', false)",
   "camera": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74, 'showEffect', false)",
   "media": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "media": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "media": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "media": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "media": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "media": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "media": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "media": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "media": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "media": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "media": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 14)",
   "media": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 14, 15)",
   "media": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 15, 16)",
   "media": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 16, 17)",
   "media": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 17, 18)",
   "media": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 18, 19)",
   "media": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 19, 20)",
   "media": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 20, 21)",
   "media": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 21, 22)",
   "media": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 22, 23)",
   "media": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 23, 24)",
   "media": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 24, 25)",
   "media": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 25, 26)",
   "media": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 26, 27)",
   "media": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 27, 28)",
   "media": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 28, 29)",
   "media": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 29, 30)",
   "media": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 30, 31)",
   "media": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 31, 32)",
   "media": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 32, 33)",
   "media": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "if(this.existsKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')){ if(this.getKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')) { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_AB75BE4B_BB07_DDE4_41AA_F6545DB318D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')",
   "camera": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
   "begin": "this.registerKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF', this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 33, 34); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false)",
   "media": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7, 'hideEffect', false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4, 'hideEffect', false)",
   "camera": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 34, 35); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592622D9_4F5F_9C05_41B2_338DC5475EF6, 'hideEffect', false)",
   "media": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8, 'hideEffect', false)",
   "camera": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 35, 36); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592562D9_4F5F_9C05_41BC_80B57D556509, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925F2D9_4F5F_9C05_41A6_F61449698672, 'hideEffect', false)",
   "media": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE, 'hideEffect', false)",
   "camera": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 36, 37); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61, 'hideEffect', false)",
   "media": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_2C6211A3_316E_FC14_41B8_E61760C15732, 'hideEffect', false)",
   "camera": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 37, 38); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5, 'showEffect', false)",
   "media": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 38, 39); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61F1A3_316E_FC14_41C0_42342C4F5761, 'hideEffect', false)",
   "camera": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 39, 40); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61E1A3_316E_FC14_4161_88D26C3E099E, 'showEffect', false)",
   "media": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 40, 41)",
   "media": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 41, 42)",
   "media": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 42, 43)",
   "media": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 43, 0)",
   "media": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Drone View 1",
 "id": "panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
 "thumbnailUrl": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_t.jpg",
 "hfovMin": "120%",
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5617C5C_BB07_DD9C_41D9_6462C7CF9715"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D3AA48E_59D4_0D67_41A5_D113039BADA5",
 "levels": [
  {
   "url": "media/popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.57,
 "id": "popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 1.48,
 "yaw": 157.49,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -77.42,
   "backwardYaw": 117.98,
   "distance": 1,
   "panorama": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 91.49,
   "backwardYaw": 145.34,
   "distance": 1,
   "panorama": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 33.53,
   "backwardYaw": 99.21,
   "distance": 1,
   "panorama": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -174.77,
   "backwardYaw": 25.78,
   "distance": 1,
   "panorama": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599"
  }
 ],
 "hfov": 360,
 "id": "panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
 "thumbnailUrl": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_t.jpg",
 "label": "Main Area 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_34DA4C00_2045_18DB_41B0_465B481DF208",
  "this.overlay_334DA1E7_204F_0B24_41B4_612FAA3C2C6D",
  "this.overlay_3647FACE_205D_3964_4188_3898980AFE33",
  "this.overlay_37692CA9_2043_192D_41BF_9E43653448F4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D3F8490_59D4_0D7A_4190_E63B7F58E45C",
 "levels": [
  {
   "url": "media/popup_4E35B964_59CC_07DB_41CE_32EF01E170AE_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4E35B964_59CC_07DB_41CE_32EF01E170AE_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4E35B964_59CC_07DB_41CE_32EF01E170AE_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.31,
 "id": "popup_427C5310_57D4_0ABB_41CE_8175CFF7561E",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_427C5310_57D4_0ABB_41CE_8175CFF7561E_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -28.74,
 "yaw": -141.5,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.81,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B54FEB01_BB07_DB64_41E4_A6645D29ABD1"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Drone View 3",
 "id": "panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
 "thumbnailUrl": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_t.jpg",
 "hfovMin": "120%",
 "pitch": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.61,
   "backwardYaw": -157.62,
   "distance": 1,
   "panorama": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -93.69,
   "backwardYaw": 116.05,
   "distance": 1,
   "panorama": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6"
  }
 ],
 "hfov": 360,
 "id": "panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
 "thumbnailUrl": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_t.jpg",
 "label": "Jakuzi 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_06FC6BA6_21C5_7F24_419F_77E2772C17AA",
  "this.overlay_09FB798C_21C7_1BE4_41BF_8A6063842F16"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.83,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B50F6C07_BB07_DD6C_41DE_60F1740D8E93"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.56,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B49E9D65_BB07_DFAC_41E2_56962CD1A177"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.5,
 "id": "popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -22.25,
 "yaw": -2.07,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_AB453E42_BB07_DDE4_41E1_297087ADFA2B",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.58,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B56C9C66_BB07_DDAC_41CD_A9B664D57EC4"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 111.11,
   "backwardYaw": -59.14,
   "distance": 1,
   "panorama": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -69.79,
   "backwardYaw": 106.52,
   "distance": 1,
   "panorama": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F"
  }
 ],
 "hfov": 360,
 "id": "panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
 "thumbnailUrl": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_t.jpg",
 "label": "Entrance 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_2F3CA3A6_2043_0F27_41BF_410F7F35504C",
  "this.overlay_304C69A8_2047_3B2C_419C_082DE4DF495C"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B59B6C72_BB07_DDA4_41E7_3555F43D0119"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.35,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4F64DE5_BB07_DEAC_41E5_2C0A7241A16B"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 32.65,
   "backwardYaw": 104.79,
   "distance": 1,
   "panorama": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 24.43,
   "backwardYaw": -92,
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 136.54,
   "backwardYaw": -51.38,
   "distance": 1,
   "panorama": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -56.29,
   "backwardYaw": 24.74,
   "distance": 1,
   "panorama": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD"
  }
 ],
 "hfov": 360,
 "id": "panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
 "thumbnailUrl": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_t.jpg",
 "label": "Main Pool View 1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_384A1827_2047_1924_41BC_1E977306D9E0",
  "this.overlay_380610F6_2043_0924_41AB_EE3CF1D701A4",
  "this.overlay_3D95F8F4_2045_3924_41BB_2E7CB4B592D1",
  "this.overlay_0E1C60FC_2E03_3BFA_41B3_5FABF5D063F4",
  "this.overlay_4464A16E_57DC_0967_418A_8BB14FB1CB72",
  "this.popup_43112D81_57DC_399D_41B5_AFB08C479374",
  "this.overlay_431C4CDC_57DC_1FA4_41C5_5E1B46A0D0EE",
  "this.popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -5.51,
   "backwardYaw": -54.59,
   "distance": 1,
   "panorama": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -92,
   "backwardYaw": 24.43,
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
 "thumbnailUrl": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_t.jpg",
 "label": "Main Pool View 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3ABD52E6_2043_0924_41B2_332D09683BD5",
  "this.overlay_3BDEF27F_204F_0924_41AD_F18625CBA26D",
  "this.overlay_43964DD8_57D4_39AB_41C4_902A932FB06E",
  "this.popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E",
  "this.overlay_42FA906D_57D4_0765_41D2_5308C9ED054F",
  "this.popup_427C5310_57D4_0ABB_41CE_8175CFF7561E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5291C27_BB07_DDAC_41CE_6C8F45A0A73E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.16,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B451ED0E_BB07_DF7C_41C5_0094666F379F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_AB414E40_BB07_DDE4_4158_78655ED79160",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 14.53,
   "backwardYaw": -22.08,
   "distance": 1,
   "panorama": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 104.79,
   "backwardYaw": 32.65,
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
 "thumbnailUrl": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_t.jpg",
 "label": "Secondary Pool View 1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3D107151_2043_0B7D_41BE_8DE8DA7F4D14",
  "this.overlay_3E39A47C_203D_092B_41B3_BC4122A219B0",
  "this.overlay_431CFD83_57CC_799D_41AE_585C104B3587",
  "this.popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -78.36,
   "backwardYaw": 85.56,
   "distance": 1,
   "panorama": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 94.17,
   "backwardYaw": -90.79,
   "distance": 1,
   "panorama": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208"
  }
 ],
 "hfov": 360,
 "id": "panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
 "thumbnailUrl": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_t.jpg",
 "label": "Road to Hotspring",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0EA31A6C_21C5_3924_41BB_A21CAAB20A5D",
  "this.overlay_0E255A43_21C3_195C_41BF_F15D6DAA1583"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AB583E30_BB07_DDA4_41DA_C71738310A54"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6E78BC7_BB07_DAEC_41E1_A53FCB869FB4"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -22.08,
   "backwardYaw": 14.53,
   "distance": 1,
   "panorama": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
 "thumbnailUrl": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_t.jpg",
 "label": "Secondary Pool View",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3F592C4F_203F_3964_4198_2A0F512A9203",
  "this.overlay_43507AD3_57CC_3BBC_4193_9AB9041DC73A",
  "this.popup_43019720_57CC_0A9B_41CD_3154FA2D610B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.17,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4241CFD_BB07_DE9C_41CA_AC40E7E72CF4"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6C85B91_BB07_DB64_41C3_A4C66B896B9F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 85.56,
   "backwardYaw": -78.36,
   "distance": 1,
   "panorama": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -89.91,
   "backwardYaw": 85.43,
   "distance": 1,
   "panorama": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
 "thumbnailUrl": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_t.jpg",
 "label": "Road to Hotspring 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_119F0861_21FD_795C_418C_82FA1324C548",
  "this.overlay_104C262C_21FD_0924_41AE_83929F9E5BE4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.81,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B534FC12_BB07_DD64_41E4_619C7B59514B"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 25.78,
   "backwardYaw": -174.77,
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 108.66,
   "backwardYaw": -65.23,
   "distance": 1,
   "panorama": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
 "thumbnailUrl": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_t.jpg",
 "label": "Main Area",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_34D860D8_204F_096C_4168_4A660CA7699C",
  "this.overlay_34D839D9_204D_1B6D_41C0_679893BB4D26"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.75,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5874C7C_BB07_DD9C_41D4_27C62AD0662D"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.16,
 "id": "popup_43019720_57CC_0A9B_41CD_3154FA2D610B",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43019720_57CC_0A9B_41CD_3154FA2D610B_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -33.23,
 "yaw": -46.52,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AB12ADFA_BB07_DEA4_41E2_BDFDB58E3897"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_AB726E47_BB07_DDEC_4193_D7D3A6111A7B",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D36A48D_59D4_0D6A_41CE_E1C08548B88B",
 "levels": [
  {
   "url": "media/popup_43019720_57CC_0A9B_41CD_3154FA2D610B_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_43019720_57CC_0A9B_41CD_3154FA2D610B_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_43019720_57CC_0A9B_41CD_3154FA2D610B_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -90.79,
   "backwardYaw": 94.17,
   "distance": 1,
   "panorama": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 91.01,
   "backwardYaw": -91.02,
   "distance": 1,
   "panorama": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4296C53_DE46_9390_41E4_B6F280630208",
 "thumbnailUrl": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_t.jpg",
 "label": "Parking and Locket 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0CBDA83C_21C7_7924_4190_F2C9B6B73D54",
  "this.overlay_0E5C4E8C_21C5_19E4_41AC_A6C0CDEDEAB9",
  "this.overlay_3F1FDCC9_30E1_87EF_41B9_EE513C912C95",
  "this.popup_234730B3_3121_9FA2_41A3_51297DD76840"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -157.01,
   "backwardYaw": 38.83,
   "distance": 1,
   "panorama": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -73.69,
   "backwardYaw": 179.84,
   "distance": 1,
   "panorama": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
 "thumbnailUrl": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_t.jpg",
 "label": "Main Pool View 4",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_3C3307E0_2043_F75C_41AA_3EF310792F38",
  "this.overlay_3C6BCD2F_2044_FB24_41B4_9ADE0FA8F64C",
  "this.overlay_46E87AA6_57FC_7BE7_41CB_5F1E68D61C29",
  "this.popup_464DF088_57FC_07AB_41D4_560017AB0BBA",
  "this.overlay_452F9AE6_57D4_1B67_41D3_80CE3BF06056",
  "this.popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2",
  "this.overlay_43BE90A6_57D4_07E7_419A_3D5641FB7FD5",
  "this.popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC"
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_AB4DAE46_BB07_DDEC_41B4_59B97A98F921",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.48,
 "id": "popup_4E35B964_59CC_07DB_41CE_32EF01E170AE",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E35B964_59CC_07DB_41CE_32EF01E170AE_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -2.63,
 "yaw": -93.04,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.89,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B58D0C88_BB07_DD64_41DA_4482D2501404"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.09,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5158BE7_BB07_DAAC_41D6_27BE37AFBD55"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6F78A00_BB07_2564_41DD_A6EB0D32158D"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8, 'hideEffect', false)",
   "camera": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592562D9_4F5F_9C05_41BC_80B57D556509, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925F2D9_4F5F_9C05_41A6_F61449698672, 'hideEffect', false)",
   "media": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE, 'hideEffect', false)",
   "camera": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61, 'hideEffect', false)",
   "media": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_2C6211A3_316E_FC14_41B8_E61760C15732, 'hideEffect', false)",
   "camera": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5, 'showEffect', false)",
   "media": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 0); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.64,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B418DCDC_BB07_DE9C_41B4_24DD59B37F36"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.94,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B51E9BF4_BB07_DAAC_41C1_353F7E9891D5"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5B96C91_BB07_DD64_41E1_F605CB447C81"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.66,
 "id": "popup_4622D162_57FC_069C_41C0_270D8DCB0256",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4622D162_57FC_069C_41C0_270D8DCB0256_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -27.35,
 "yaw": 84.01,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -74.23,
   "backwardYaw": -109.24,
   "distance": 1,
   "panorama": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6"
  }
 ],
 "hfov": 360,
 "id": "panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
 "thumbnailUrl": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_t.jpg",
 "label": "Jakuzi 1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0B3069FF_21CC_FB25_41BB_1C0129DBB963",
  "this.overlay_4DBA1CDD_59F4_3EE5_41C6_15EAD640AC4A",
  "this.popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 99.21,
   "backwardYaw": 33.53,
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -51.38,
   "backwardYaw": 136.54,
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
 "thumbnailUrl": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_t.jpg",
 "label": "Main Pool Stairs",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_365F9074_205D_093B_41AA_493B17FEAB40",
  "this.overlay_37DD3AB1_2043_193D_4196_C886D308E984",
  "this.overlay_38FF3D73_2045_1B3C_41B1_DFBA6AA6D99E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.42,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AB1CDE05_BB07_DD6C_41C6_E1AB6ABE5CED"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.47,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5EF4CD0_BB07_DEE4_41CF_F007A841A9F0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D33848B_59D4_0D6E_41AB_82105EFC6E61",
 "levels": [
  {
   "url": "media/popup_4319B2E6_57D4_0B67_41B0_3843AA27B954_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4319B2E6_57D4_0B67_41B0_3843AA27B954_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4319B2E6_57D4_0B67_41B0_3843AA27B954_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.45,
 "id": "popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -23.93,
 "yaw": -115.69,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D495484_59D4_0D5B_41D3_A9E77D5050A5",
 "levels": [
  {
   "url": "media/popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.75,
 "id": "popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 6.35,
 "yaw": 76.75,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D311488_59D4_0D6B_41B8_DD8AA1AF77C1",
 "levels": [
  {
   "url": "media/popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.13,
 "id": "popup_4EE0591F_59F4_0764_41D4_29AFF9440914",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4EE0591F_59F4_0764_41D4_29AFF9440914_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -34.07,
 "yaw": -107.79,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D3BA48F_59D4_0D66_41C7_33867FB67409",
 "levels": [
  {
   "url": "media/popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 106.47,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5401AF0_BB07_DAA4_41AE_55BBF263924C"
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D439482_59D4_0D5E_41BD_87682C6CA6E4",
 "levels": [
  {
   "url": "media/popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5130BDC_BB07_DA9C_41B5_FDE92B9AB98F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.26,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6C78B86_BB07_DB6C_41CE_2A7FB1B9CCAB"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.25,
   "backwardYaw": 38.38,
   "distance": 1,
   "panorama": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -154.58,
   "backwardYaw": 34.74,
   "distance": 1,
   "panorama": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB"
  }
 ],
 "hfov": 360,
 "id": "panorama_D413AA81_DE41_F770_41E4_D256127F3328",
 "thumbnailUrl": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_t.jpg",
 "label": "Restaurant",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_01C5BA36_21C3_1924_4141_2A1C86F3F090",
  "this.overlay_01FF6714_21CF_08E4_4194_CF2EFDD1FFAC",
  "this.overlay_4C548976_59CC_07A7_41D5_C19BC12B1B54",
  "this.popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_4D2A5495_59D4_0D7A_41B6_D4F1F19E4D9E",
 "levels": [
  {
   "url": "media/popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -80.18,
   "backwardYaw": 103.46,
   "distance": 1,
   "panorama": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -109,
   "backwardYaw": 140.4,
   "distance": 1,
   "panorama": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 75.06,
   "backwardYaw": -73.89,
   "distance": 1,
   "panorama": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9"
  }
 ],
 "hfov": 360,
 "id": "panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
 "thumbnailUrl": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_t.jpg",
 "label": "Hotspring Gate",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_1306F3DB_21FD_0F6C_41B2_63B4B1614A0E",
  "this.overlay_138FC3B3_21FD_0F3C_41B7_CA0D5402039F",
  "this.overlay_126F495C_21C4_FB64_41BF_E8527C52A677"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.44,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B6ED2A2B_BB07_25A4_41E4_EADDF6E3AC3E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5549C32_BB07_DDA4_41DB_E1421D407F0F"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 60.94,
   "backwardYaw": -42.66,
   "distance": 1,
   "panorama": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4"
  }
 ],
 "hfov": 360,
 "id": "panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
 "thumbnailUrl": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_t.jpg",
 "label": "Back Gate",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0A12A2D6_21C3_0964_41B7_831A46539169"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -87.17,
   "backwardYaw": 96.44,
   "distance": 1,
   "panorama": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0"
  }
 ],
 "hfov": 360,
 "id": "panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
 "thumbnailUrl": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_t.jpg",
 "label": "Parkir dan loket",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_0D7B8862_21C5_395F_41AD_4122B9B77538"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5B6EB38_BB07_DBA4_41E2_974FF7A1B37B"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_2C61F1A3_316E_FC14_41C0_42342C4F5761",
 "easing": "cubic_in_out"
},
{
 "partial": false,
 "id": "panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
 "thumbnailUrl": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_t.jpg",
 "hfov": 360,
 "label": "Drone View 2",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_4C7691CD_59F4_06E5_41D1_140C5C038DE8",
  "this.popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.46,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B4BBED8F_BB07_DF7C_41E6_866F110E6CD7"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C, 'hideEffect', false)",
   "camera": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74, 'showEffect', false)",
   "media": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "media": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 15)",
   "media": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 15, 16)",
   "media": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 16, 17)",
   "media": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 17, 18)",
   "media": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 18, 19)",
   "media": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 19, 20)",
   "media": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 20, 21)",
   "media": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 21, 22)",
   "media": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 22, 0); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B523CC1D_BB07_DD9C_41D1_BA049658146B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B5177A45_BB07_25EC_419F_3FFAEF0F13FF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.63,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_B47DAD39_BB07_DFA4_41DC_BB8989F38C27"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF",
 "easing": "cubic_in_out"
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#F7931E",
 "paddingLeft": 0,
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#F7931E",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "shadow": false,
 "toolTipShadowColor": "#F7931E",
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F7931E",
 "toolTipFontColor": "#F7931E",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "verticalAlign": "top",
 "height": 60,
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "data": {
  "name": "--BUTTON SET"
 }
},
{
 "layout": "vertical",
 "backgroundColorRatios": [
  0.02
 ],
 "scrollBarWidth": 10,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "propagateClick": false,
 "width": 60,
 "scrollBarColor": "#000000",
 "right": 15,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "top": 62,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "verticalAlign": "middle",
 "height": 72,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "gap": 0,
 "paddingTop": 0,
 "class": "Container",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 }
},
{
 "layout": "horizontal",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_564FBC47_4F67_840E_41C1_0980D8A94F01",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_4F9909E2_59D4_06D8_41D3_05768F53BC30"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "width": "14.584%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 90,
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "paddingRight": 30,
 "data": {
  "name": "-button set container"
 }
},
{
 "propagateClick": false,
 "id": "Image_221569DE_31E7_81E5_41A8_23A4FDD627F5",
 "left": "8%",
 "paddingLeft": 0,
 "maxWidth": 920,
 "minWidth": 1,
 "url": "skin/Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.jpg",
 "borderSize": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "bottom": "20%",
 "height": "60%",
 "shadow": false,
 "paddingTop": 0,
 "maxHeight": 1300,
 "class": "Image",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "GATE"
 }
},
{
 "propagateClick": false,
 "id": "Image_22232A2E_31FE_82A2_41C1_234D93435EAF",
 "left": "8%",
 "right": "67%",
 "maxWidth": 922,
 "paddingLeft": 0,
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_22232A2E_31FE_82A2_41C1_234D93435EAF.jpg",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "shadow": false,
 "maxHeight": 1300,
 "class": "Image",
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "PARKIRAN"
 }
},
{
 "propagateClick": false,
 "id": "Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B",
 "left": "8%",
 "right": "67%",
 "maxWidth": 922,
 "paddingLeft": 0,
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.jpg",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "shadow": false,
 "maxHeight": 1300,
 "class": "Image",
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "SHOP"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "propagateClick": false,
 "right": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "class": "UIComponent",
 "paddingTop": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "paddingRight": 0,
 "data": {
  "name": "UIComponent2069"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "propagateClick": false,
 "right": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "shadow": false,
 "class": "ZoomImage",
 "paddingTop": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 1,
 "scaleMode": "custom",
 "paddingBottom": 0,
 "paddingRight": 0,
 "data": {
  "name": "ZoomImage2070"
 }
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton2071"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "propagateClick": false,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "paddingLeft": 5,
 "minWidth": 0,
 "iconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "top": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "iconColor": "#000000",
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowBlurRadius": 6,
 "shadow": false,
 "gap": 5,
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "class": "CloseButton",
 "paddingTop": 5,
 "minHeight": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0.3,
 "paddingBottom": 5,
 "iconWidth": 20,
 "cursor": "hand",
 "paddingRight": 5,
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35, this.camera_B50F6C07_BB07_DD6C_41DE_60F1740D8E93); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.57,
   "image": "this.AnimatedImageResource_1CF10CA1_21CF_19DD_419B_3CDE586A0428",
   "pitch": -6.89,
   "yaw": 96.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DDA9A1E_21C5_78E4_41B6_52E741821527",
 "maps": [
  {
   "hfov": 4.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -6.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4296C53_DE46_9390_41E4_B6F280630208, this.camera_B5013BFD_BB07_DA9C_41E2_0B1983CAFEC2); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.68,
   "image": "this.AnimatedImageResource_1CFE9CA6_21CF_1924_41B9_4EFE11690644",
   "pitch": -7.22,
   "yaw": -91.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DE9FDD4_21C7_1B64_418A_FE9AA4D1E390",
 "maps": [
  {
   "hfov": 3.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_B5688B16_BB07_DB6C_41BA_5CEAC156013C); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.36,
   "image": "this.AnimatedImageResource_1CEE5C8D_21CF_19E5_41B4_7815622738B0",
   "pitch": -7.54,
   "yaw": 145.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37005C7B_205F_192C_41C0_594EF5139986",
 "maps": [
  {
   "hfov": 2.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -7.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_44386CFD_57DC_1F65_41C6_217032E0F7CB, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D450483_59D4_0D5E_41C1_249919C994C3, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.58,
   "image": "this.AnimatedImageResource_4D90045E_59D4_0DE7_41D2_DE8E4D2C148D",
   "pitch": -30.64,
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43DD0D02_57DC_1E9F_41D5_48D8B0BBE855",
 "maps": [
  {
   "hfov": 4.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B, this.camera_B6C85B91_BB07_DB64_41C3_A4C66B896B9F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.77,
   "image": "this.AnimatedImageResource_1CE2AC87_21CF_19E4_41AE_C3A899E56405",
   "pitch": -17.94,
   "yaw": 106.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30120C99_2045_19EC_41B3_E37C8761647E",
 "maps": [
  {
   "hfov": 8.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925, this.camera_B6CD9B9B_BB07_DB64_41CE_1BD790EA9AD8); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.54,
   "image": "this.AnimatedImageResource_1CE2EC87_21CF_19E4_416F_D1003783A1C7",
   "pitch": 3.82,
   "yaw": -75.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32DE9587_2043_0BE5_41A1_7F9A93F1829E",
 "maps": [
  {
   "hfov": 6.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 3.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925, this.camera_B5C32CB3_BB07_DEA4_41DF_899485A4BA99); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_1CE3DC88_21CF_19EC_4197_AB5F3F8142A8",
   "pitch": -21.68,
   "yaw": -133.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_31221300_204D_08DB_41A4_F1F299981C40",
 "maps": [
  {
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A, this.camera_AB281E24_BB07_DDAC_41CC_7458A46F4A45); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.71,
   "image": "this.AnimatedImageResource_1CF7AC9D_21CF_19E4_41AD_11760DB09DA0",
   "pitch": -11.53,
   "yaw": 27.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0595202E_21C5_0927_41B9_13750AE1712B",
 "maps": [
  {
   "hfov": 3.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D414C304_DE46_9570_41E8_C12BB201207D, this.camera_AB583E30_BB07_DDA4_41DA_C71738310A54); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.88,
   "image": "this.AnimatedImageResource_1CF71C9D_21CF_19E4_41B6_7C7BB2BFCA23",
   "pitch": -11.05,
   "yaw": -69.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04E6CAD5_21DF_7964_41B9_068AFF60DD7A",
 "maps": [
  {
   "hfov": 3.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE, this.camera_B6F6CBA8_BB07_DAA4_41D6_23DB10BEF9A5); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.69,
   "image": "this.AnimatedImageResource_1CF6DC9C_21CF_19E4_41BE_5C8FD2D7FEA1",
   "pitch": -24.76,
   "yaw": 48.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0275B519_21C7_08EC_41BC_0BB5A102A904",
 "maps": [
  {
   "hfov": 2.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -24.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C, this.camera_B6F8FBB4_BB07_DAA3_41E4_E1B98043E487); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.93,
   "image": "this.AnimatedImageResource_1CF63C9C_21CF_19E4_4195_B2F919D59D24",
   "pitch": -11.26,
   "yaw": -74.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02E48CBC_21C7_1924_41BC_CB2B469180CB",
 "maps": [
  {
   "hfov": 3.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C, this.camera_B5FC5CC7_BB07_DEEC_41D7_1E61E3023F81); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.29,
   "image": "this.AnimatedImageResource_1CF75C9D_21CF_19E4_41A0_1853D22CFCA0",
   "pitch": -13.28,
   "yaw": 157.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_08FC0D31_21DD_FB3D_41A6_748ADDF328FD",
 "maps": [
  {
   "hfov": 4.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4, this.camera_B5CD7CBD_BB07_DE9C_41E5_73F4E972504C); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.89,
   "image": "this.AnimatedImageResource_1CF4CC9D_21CF_19E4_41B7_56A1FCF7202D",
   "pitch": -11.02,
   "yaw": -4.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04A60F3E_21DF_1727_41BB_9F7357F4831B",
 "maps": [
  {
   "hfov": 1.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.02
  }
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "propagateClick": false,
 "width": 60,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button settings VR"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "shadowSpread": 1,
 "minWidth": 1,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "height": 71,
 "mode": "push",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "shadowBlurRadius": 6,
 "shadow": false,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "Button",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758, this.camera_B5300A7D_BB07_259C_4189_EE55D6D65258); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.96,
   "image": "this.AnimatedImageResource_1CEEBC8D_21CF_19E5_41BE_CBA1672BD239",
   "pitch": -14.95,
   "yaw": -162.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3514D4C6_2047_0964_4182_9857941DBE94",
 "maps": [
  {
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D413AA81_DE41_F770_41E4_D256127F3328, this.camera_AB1CDE05_BB07_DD6C_41C6_E1AB6ABE5CED); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.4,
   "image": "this.AnimatedImageResource_1CF6BC96_21CF_19E4_41B5_DB850F2D2138",
   "pitch": -3.64,
   "yaw": 34.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_032BEAD8_21CF_396C_41A1_B3BA75F76CCE",
 "maps": [
  {
   "hfov": 3.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -3.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE, this.camera_AB12ADFA_BB07_DEA4_41E2_BDFDB58E3897); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.96,
   "image": "this.AnimatedImageResource_1CE9BC96_21CF_19E4_414F_FC49DBE2B192",
   "pitch": -13.89,
   "yaw": 127.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0282E82B_21CD_392C_41B6_108A08846FAE",
 "maps": [
  {
   "hfov": 3.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758, this.camera_B4356CF3_BB07_DEA4_41E3_4B0F47DA6E47); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.89,
   "image": "this.AnimatedImageResource_1CEE1C8D_21CF_19E5_41B4_6BB5F3F33CF8",
   "pitch": -18.27,
   "yaw": 39.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_36CD586A_2047_192C_41B8_B9D9015D1232",
 "maps": [
  {
   "hfov": 4.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -18.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4350FC38_57DC_3EEC_41D0_6F03D438E46C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D439482_59D4_0D5E_41BD_87682C6CA6E4, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_4DAF845E_59D4_0DE7_41A1_E6A4EB91AE3F",
   "pitch": 6.35,
   "yaw": 76.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43F2D668_57DC_0B6B_4199_0CD455B40638",
 "maps": [
  {
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72, this.camera_B4E3BDF0_BB07_DEA4_41D1_EE40516B54F5); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.99,
   "image": "this.AnimatedImageResource_1CFA8CA8_21CF_192C_41A8_79FEDF0BEE7D",
   "pitch": -8.25,
   "yaw": 103.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_135577A5_21C3_1724_41A3_354120217681",
 "maps": [
  {
   "hfov": 3.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -8.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B, this.camera_B58D0C88_BB07_DD64_41DA_4482D2501404); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.43,
   "image": "this.AnimatedImageResource_1BC02112_21C5_08FC_41B2_85F349804E96",
   "pitch": -10.23,
   "yaw": -59.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2FC651CC_205F_0B64_41B6_94A1A42EB03B",
 "maps": [
  {
   "hfov": 5.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -10.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72, this.camera_B5B96C91_BB07_DD64_41E1_F605CB447C81); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_1CE58C85_21CF_19E4_41A3_FE5AD223A9C7",
   "pitch": 1.35,
   "yaw": 140.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_124250F9_21C5_092C_41BB_278B80E3CD00",
 "maps": [
  {
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 1.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_B5D02B50_BB07_DBE4_41DE_E9133DACBC8D); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.48,
   "image": "this.AnimatedImageResource_1CEB1C95_21CF_19E4_41A3_DA05BD17D08B",
   "pitch": -12.11,
   "yaw": 24.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3CAD5E04_2045_78E4_41B2_0B8F0BCE57B2",
 "maps": [
  {
   "hfov": 6.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -12.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3, this.camera_B5A19B42_BB07_DBE4_41E3_E5D44700B6E2); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.43,
   "image": "this.AnimatedImageResource_1CEB5C95_21CF_19E4_41B7_06EB44BEAC5A",
   "pitch": -23.85,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DB395EE_2047_0B24_41B1_4F90FE1495BF",
 "maps": [
  {
   "hfov": 11.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -23.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4622D162_57FC_069C_41C0_270D8DCB0256, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_409DB682_57CC_0B9C_41D4_AFFF880B8F4B, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.5,
   "image": "this.AnimatedImageResource_40E32654_57CC_0ABB_41CA_09C50595D8A2",
   "pitch": -27.35,
   "yaw": 84.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_470D5FAE_57FC_19E7_41D0_B26170E0084D",
 "maps": [
  {
   "hfov": 8.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -27.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_42433F8F_57D4_F9A4_41CF_6FCB749E45A0, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D33B48A_59D4_0D6E_41D0_6AD9439FE53E, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.17,
   "image": "this.AnimatedImageResource_4D986461_59D4_0DDD_41CF_9281050CA749",
   "pitch": -53.44,
   "yaw": 66.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42C5B39B_57D4_09AD_41D2_B27564515B55",
 "maps": [
  {
   "hfov": 3.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -53.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4319B2E6_57D4_0B67_41B0_3843AA27B954, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D33848B_59D4_0D6E_41AB_82105EFC6E61, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.25,
   "image": "this.AnimatedImageResource_4D983461_59D4_0DDD_41D5_67091CD974F4",
   "pitch": -37.04,
   "yaw": -90.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_439F0433_57D4_0EFC_41C3_751893D30A9C",
 "maps": [
  {
   "hfov": 4.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -37.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4332189_DE42_B570_41DA_7335441D6620, this.camera_B5401AF0_BB07_DAA4_41AE_55BBF263924C); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.77,
   "image": "this.AnimatedImageResource_1CEE5C8B_21CF_19E3_4199_768AC3CCA6A9",
   "pitch": -34.05,
   "yaw": 120.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3494235E_2045_0F64_41C0_63E8DD68B75D",
 "maps": [
  {
   "hfov": 3.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -34.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2, this.camera_B54FEB01_BB07_DB64_41E4_A6645D29ABD1); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.65,
   "image": "this.AnimatedImageResource_1CEF9C8D_21CF_19E5_41B0_D6D8F21F2DEB",
   "pitch": -14.75,
   "yaw": -149.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_35EA864E_2045_0964_41AB_1AC47E06F490",
 "maps": [
  {
   "hfov": 2.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED, this.camera_B579EB0D_BB07_DB7C_41E4_1E6E0C983058); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.61,
   "image": "this.AnimatedImageResource_1CEFFC8D_21CF_19E5_4189_8ED1D6586C37",
   "pitch": -14.56,
   "yaw": 32.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3531262E_2045_0924_41B5_40FBE8112F5C",
 "maps": [
  {
   "hfov": 3.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43422759_57DC_0AAD_41C2_33AE13B80D86, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D433480_59D4_0D5A_41D3_CEB9D444A925, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_4DAE845E_59D4_0DE6_41B3_EC764217A621",
   "pitch": 3.09,
   "yaw": -72.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_44F8334D_57D4_0AA5_41BE_5E40BC25934C",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB, this.camera_B523CC1D_BB07_DD9C_41D1_BA049658146B); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.72,
   "image": "this.AnimatedImageResource_1CE9FC96_21CF_19E4_41A3_578E85DAFA0C",
   "pitch": -15.58,
   "yaw": -155.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0290164E_21C3_0964_41AA_98959C5DBCED",
 "maps": [
  {
   "hfov": 3.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -15.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A, this.camera_B534FC12_BB07_DD64_41E4_619C7B59514B); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.06,
   "image": "this.AnimatedImageResource_1CE96C9C_21CF_19E4_4190_7B275B698D8F",
   "pitch": -1.39,
   "yaw": 16.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0544DFC6_21C5_F764_41C0_49CBBC0ED9CF",
 "maps": [
  {
   "hfov": 4.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4C200E9D_59FC_3D64_41B6_2CA08B8E9806, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D3AA48E_59D4_0D67_41A5_D113039BADA5, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_4D9C8463_59D4_0DDD_4168_D1506A2E6E95",
   "pitch": 0.3,
   "yaw": -65.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4CAA486F_59FC_05A4_41B6_BB838057DCC3",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4C2D1DBA_59FC_1EAC_41C4_D78692627BF4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D3BA48F_59D4_0D66_41C7_33867FB67409, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.19,
   "image": "this.AnimatedImageResource_4D9D6463_59D4_0DDD_41C0_8B63BF08560B",
   "pitch": -13.08,
   "yaw": 112.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4CBC323D_59FC_05A7_41A2_2CE08F59C10A",
 "maps": [
  {
   "hfov": 5.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1, this.camera_B5855B2E_BB07_DBBC_41A3_34A99FFAA1A3); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.41,
   "image": "this.AnimatedImageResource_1CE24C87_21CF_19E4_41AF_7F7993965E06",
   "pitch": -24.15,
   "yaw": -148.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_316F9A97_2043_79E4_41BA_CE4E5EF442CF",
 "maps": [
  {
   "hfov": 11.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -24.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599, this.camera_B5B6EB38_BB07_DBA4_41E2_974FF7A1B37B); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_1CE39C88_21CF_19EC_41B1_1E18365F339D",
   "pitch": -5.63,
   "yaw": -65.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_324636E8_204D_092B_41AE_09FF0120DBB9",
 "maps": [
  {
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F, this.camera_B59A1B23_BB07_DBA4_41D5_A63950E13AA2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.19,
   "image": "this.AnimatedImageResource_18271367_21C3_0F24_41B8_E2C4DA23E026",
   "pitch": -31.06,
   "yaw": 119.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1498993A_21C7_3B2F_41B8_9AED007680D9",
 "maps": [
  {
   "hfov": 5.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -31.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00, this.camera_B5158BE7_BB07_DAAC_41D6_27BE37AFBD55); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.39,
   "image": "this.AnimatedImageResource_1CFF5CA7_21CF_1924_419A_A00A7FB32B18",
   "pitch": -4.37,
   "yaw": 85.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_11AB6BD3_21FF_7F7C_41A5_3BC8E1DF8264",
 "maps": [
  {
   "hfov": 3.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -4.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72, this.camera_B51E9BF4_BB07_DAAC_41C1_353F7E9891D5); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.4,
   "image": "this.AnimatedImageResource_1CFCDCA8_21CF_192C_4195_78D0EF226F42",
   "pitch": -6.63,
   "yaw": -73.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1030B0CB_21FF_096C_4193_02BB80DDB85B",
 "maps": [
  {
   "hfov": 4.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -6.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B, this.camera_AB0FEE10_BB07_DD64_41E1_9BA764696BBA); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.93,
   "image": "this.AnimatedImageResource_1CEA8C94_21CF_19E4_41B0_C156DE03E9F8",
   "pitch": -9.59,
   "yaw": -54.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A544A2B_204F_192D_41B9_4B675F2083E1",
 "maps": [
  {
   "hfov": 2.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3, this.camera_AB3EBE1A_BB07_DD64_41B0_9114A91AD4D8); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.8,
   "image": "this.AnimatedImageResource_1CEAFC94_21CF_19E4_41B9_70077AD52FE3",
   "pitch": -5.01,
   "yaw": 38.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B7025CD_204D_0B64_41BF_FE9295551BB0",
 "maps": [
  {
   "hfov": 2.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4419BBAF_57D4_19E5_41CC_B5A8EAC04D5A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D4DC486_59D4_0D67_41C7_1D4617F9F3A1, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.93,
   "image": "this.AnimatedImageResource_4D950460_59D4_0DDB_41B7_9F93C3FFA7BE",
   "pitch": -22.25,
   "yaw": -2.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42DBCFD4_57D4_F9BB_4193_08274DBC880A",
 "maps": [
  {
   "hfov": 4.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -22.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_B56C9C66_BB07_DDAC_41CD_A9B664D57EC4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.88,
   "image": "this.AnimatedImageResource_1CE11C8A_21CF_19EC_41A3_EC1BAE1C624D",
   "pitch": -20.07,
   "yaw": 117.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34D5401F_204D_08E4_41BD_EA7488B1C803",
 "maps": [
  {
   "hfov": 3.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -20.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758, this.camera_B59B6C72_BB07_DDA4_41E7_3555F43D0119); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.7,
   "image": "this.AnimatedImageResource_1CE17C8B_21CF_19EC_41A6_B1E8A208D9CD",
   "pitch": 5.91,
   "yaw": -73.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_347CACD1_2043_397C_41B2_CD491F42711A",
 "maps": [
  {
   "hfov": 5.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 5.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D413AA81_DE41_F770_41E4_D256127F3328, this.camera_B5874C7C_BB07_DD9C_41D4_27C62AD0662D); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.49,
   "image": "this.AnimatedImageResource_1CEEDC8B_21CF_19EC_4197_2C194D0019F5",
   "pitch": -6.24,
   "yaw": 38.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0162DAFD_21C5_3924_41AE_E2FEF2F7BD9D",
 "maps": [
  {
   "hfov": 2.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -6.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D414C304_DE46_9570_41E8_C12BB201207D, this.camera_B47DAD39_BB07_DFA4_41DC_BB8989F38C27); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.61,
   "image": "this.AnimatedImageResource_1CF43C9D_21CF_19E4_41A3_21D0DBD201E0",
   "pitch": -10.49,
   "yaw": 126.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07B25F7C_21DD_1724_4174_153423197FB4",
 "maps": [
  {
   "hfov": 5.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.14,
   "image": "this.AnimatedImageResource_1CF5AC9D_21CF_19E4_41B1_2CA1A474DA0F",
   "pitch": -16.92,
   "yaw": -168.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06113723_21C3_08DC_41B9_9E54DAB03D79",
 "maps": [
  {
   "hfov": 7.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508, this.camera_B4702D24_BB07_DFAC_41D3_EA76332ADBBB); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.22,
   "image": "this.AnimatedImageResource_1CF51C9F_21CF_19E5_41AB_44298695849C",
   "pitch": -9.44,
   "yaw": -157.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06B606A7_21C5_0924_41BF_805477E35F89",
 "maps": [
  {
   "hfov": 5.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0, this.camera_B440CD18_BB07_DF64_41CF_BA228F4F9351); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.33,
   "image": "this.AnimatedImageResource_1CF28C9F_21CF_19E5_41B4_FEB3D285EB27",
   "pitch": -10.05,
   "yaw": -42.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0AC75EBA_21CD_392C_41A3_E474B7B1A2BF",
 "maps": [
  {
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -10.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E35B964_59CC_07DB_41CE_32EF01E170AE, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D3F8490_59D4_0D7A_4190_E63B7F58E45C, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.94,
   "image": "this.AnimatedImageResource_4D80B464_59D4_0DDB_41C6_DAB96D75F900",
   "pitch": -2.63,
   "yaw": -93.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D0292B4_59CC_0ABB_4189_06417570618C",
 "maps": [
  {
   "hfov": 4.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5, this.camera_B57AEC50_BB07_DDE4_41C1_F46FB254BA17); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.72,
   "image": "this.AnimatedImageResource_1CF3DCA0_21CF_19DB_41B2_FA5AB9543F44",
   "pitch": -20.7,
   "yaw": -109.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_085B0A2F_21CD_1924_41A1_17329E4EC9C1",
 "maps": [
  {
   "hfov": 4.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -20.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508, this.camera_B5617C5C_BB07_DD9C_41D9_6462C7CF9715); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.52,
   "image": "this.AnimatedImageResource_1CF34CA0_21CF_19DB_41BD_5C5590817138",
   "pitch": -5.9,
   "yaw": 116.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B76FC2A_21CF_192F_41BF_4CB9EBF1A05C",
 "maps": [
  {
   "hfov": 5.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4EE0591F_59F4_0764_41D4_29AFF9440914, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D224491_59D4_0D7A_41AD_8282D5B3D2EA, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.41,
   "image": "this.AnimatedImageResource_4D82A466_59D4_0DA7_41D3_E0D4EAD2CA4B",
   "pitch": -34.07,
   "yaw": -107.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D8C9758_59F4_0BEC_41C0_AB80AAF1E278",
 "maps": [
  {
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -34.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599, this.camera_B6EA3A21_BB07_25A7_41DC_6C5ECCB187E9); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.31,
   "image": "this.AnimatedImageResource_1CE0DC89_21CF_19EC_419E_5D5CE524CBAB",
   "pitch": -21.67,
   "yaw": -174.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34DA4C00_2045_18DB_41B0_465B481DF208",
 "maps": [
  {
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4332189_DE42_B570_41DA_7335441D6620, this.camera_B6F78A00_BB07_2564_41DD_A6EB0D32158D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_1CE01C89_21CF_19EC_41BA_AE63F7E33D93",
   "pitch": -6.99,
   "yaw": -77.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_334DA1E7_204F_0B24_41B4_612FAA3C2C6D",
 "maps": [
  {
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5, this.camera_B6F9FA0A_BB07_2564_419A_0205A8EEF8F4); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.73,
   "image": "this.AnimatedImageResource_1CE07C8A_21CF_19EC_41B9_4ED99B4F6AAF",
   "pitch": -14.87,
   "yaw": 91.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3647FACE_205D_3964_4188_3898980AFE33",
 "maps": [
  {
   "hfov": 3.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F, this.camera_B6E0FA18_BB07_2564_41C7_DF307C905D37); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.59,
   "image": "this.AnimatedImageResource_1CE1CC8A_21CF_19EC_41B0_3D634A2A3B69",
   "pitch": -27.51,
   "yaw": 33.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37692CA9_2043_192D_41BF_9E43653448F4",
 "maps": [
  {
   "hfov": 5.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -27.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4, this.camera_B4AACDA4_BB07_DEAC_41E0_EB6759539600); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.35,
   "image": "this.AnimatedImageResource_1CF2FC9F_21CF_19E5_41A7_A695E4D9A003",
   "pitch": -8.83,
   "yaw": 92.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06FC6BA6_21C5_7F24_419F_77E2772C17AA",
 "maps": [
  {
   "hfov": 3.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -8.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6, this.camera_B4D5CDC6_BB07_DEEC_41D1_89A5EEDE8706); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.81,
   "image": "this.AnimatedImageResource_1CF27C9F_21CF_19E5_41AD_7F5764FB63CE",
   "pitch": -42.5,
   "yaw": -93.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09FB798C_21C7_1BE4_41BF_8A6063842F16",
 "maps": [
  {
   "hfov": 3.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -42.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C, this.camera_B53EBA98_BB07_2564_41DA_4A6179C7965E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.34,
   "image": "this.AnimatedImageResource_1CE50C86_21CF_19E4_41A1_527EB134E43F",
   "pitch": -15.64,
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F3CA3A6_2043_0F27_41BF_410F7F35504C",
 "maps": [
  {
   "hfov": 5.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -15.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F, this.camera_B52B8AB2_BB07_DAA4_41A7_1D8333BB0455); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.48,
   "image": "this.AnimatedImageResource_1CE55C87_21CF_19E4_41BA_9081E4C850DB",
   "pitch": -33.04,
   "yaw": -69.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_304C69A8_2047_3B2C_419C_082DE4DF495C",
 "maps": [
  {
   "hfov": 10.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -33.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F, this.camera_B542AC3D_BB07_DD9C_41E2_0C31365E64FF); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.96,
   "image": "this.AnimatedImageResource_1CECDC93_21CF_19FC_41A0_5EAB7534CF03",
   "pitch": -3.8,
   "yaw": 136.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_384A1827_2047_1924_41BC_1E977306D9E0",
 "maps": [
  {
   "hfov": 7.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 136.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B, this.camera_B5549C32_BB07_DDA4_41DB_E1421D407F0F); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.68,
   "image": "this.AnimatedImageResource_1CEC2C93_21CF_19FC_418F_F47B2A53529A",
   "pitch": -11.95,
   "yaw": 24.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_380610F6_2043_0924_41AB_EE3CF1D701A4",
 "maps": [
  {
   "hfov": 3.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350, this.camera_B5291C27_BB07_DDAC_41CE_6C8F45A0A73E); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.4,
   "image": "this.AnimatedImageResource_1CEC7C93_21CF_19FC_41A1_45A85A88191D",
   "pitch": -16.57,
   "yaw": 32.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D95F8F4_2045_3924_41BB_2E7CB4B592D1",
 "maps": [
  {
   "hfov": 3.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD, this.camera_B54EBC46_BB07_DDEC_41BA_737E142F9526); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.27,
   "image": "this.AnimatedImageResource_0087FA8E_2E01_0E16_41AB_B7E1A4540F5C",
   "pitch": -22.83,
   "yaw": -56.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E1C60FC_2E03_3BFA_41B3_5FABF5D063F4",
 "maps": [
  {
   "hfov": 6.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -22.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43112D81_57DC_399D_41B5_AFB08C479374, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D47A484_59D4_0D5A_41C7_242DFC9DB24D, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_4D92E45F_59D4_0DE5_41BA_4856FEABCF64",
   "pitch": -24.01,
   "yaw": -13.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4464A16E_57DC_0967_418A_8BB14FB1CB72",
 "maps": [
  {
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -24.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_42AFE98A_57DC_39AF_41B3_A6A9B84CD20F, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D495484_59D4_0D5B_41D3_A9E77D5050A5, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.63,
   "image": "this.AnimatedImageResource_4D93445F_59D4_0DE5_41D2_B3E2656840FD",
   "pitch": -29.52,
   "yaw": -74.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_431C4CDC_57DC_1FA4_41C5_5E1B46A0D0EE",
 "maps": [
  {
   "hfov": 4.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -29.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_B5D13CA7_BB07_DEAC_41DE_BBD6EE74C657); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.35,
   "image": "this.AnimatedImageResource_1CEDDC94_21CF_19E4_41AA_02C50531A1ED",
   "pitch": -5.18,
   "yaw": -92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3ABD52E6_2043_0924_41B2_332D09683BD5",
 "maps": [
  {
   "hfov": 2.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8, this.camera_B5AA5C9B_BB07_DD64_41DA_B489DAB5A9B8); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.41,
   "image": "this.AnimatedImageResource_1CED4C94_21CF_19E4_4156_05BF1F14586E",
   "pitch": -10.14,
   "yaw": -5.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3BDEF27F_204F_0924_41AD_F18625CBA26D",
 "maps": [
  {
   "hfov": 3.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -10.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_430A0CC4_57D4_1FA4_41D2_31BD308E557E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D4A8485_59D4_0D5A_41C4_FAAF3BC0728E, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_4D93B45F_59D4_0DE5_41C8_C3200E05D5FA",
   "pitch": -24.11,
   "yaw": -40.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43964DD8_57D4_39AB_41C4_902A932FB06E",
 "maps": [
  {
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -24.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_427C5310_57D4_0ABB_41CE_8175CFF7561E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D4B9485_59D4_0D5A_41CE_140EE8A4EDE5, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.67,
   "image": "this.AnimatedImageResource_4D940460_59D4_0DDB_41A9_58A584D3AA3C",
   "pitch": -28.74,
   "yaw": -141.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42FA906D_57D4_0765_41D2_5308C9ED054F",
 "maps": [
  {
   "hfov": 4.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -28.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_B4F64DE5_BB07_DEAC_41E5_2C0A7241A16B); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.85,
   "image": "this.AnimatedImageResource_1CE8DC95_21CF_19E4_419D_FD8986F1F410",
   "pitch": -1.91,
   "yaw": 104.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D107151_2043_0B7D_41BE_8DE8DA7F4D14",
 "maps": [
  {
   "hfov": 2.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -1.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377, this.camera_B4C77DDA_BB07_DEE4_41A1_09103D623B94); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.93,
   "image": "this.AnimatedImageResource_1CE83C95_21CF_19E4_41B9_7490D25006C7",
   "pitch": -17.31,
   "yaw": 14.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E39A47C_203D_092B_41B3_BC4122A219B0",
 "maps": [
  {
   "hfov": 5.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -17.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_41C10B41_57CC_3A9C_41D1_C85A5D6EACB4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D35C48C_59D4_0D6A_41D4_099452BFF4C9, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.32,
   "image": "this.AnimatedImageResource_4D99C462_59D4_0DDF_41BB_443D9703E7D9",
   "pitch": -35.85,
   "yaw": 51.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_431CFD83_57CC_799D_41AE_585C104B3587",
 "maps": [
  {
   "hfov": 4.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -35.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4296C53_DE46_9390_41E4_B6F280630208, this.camera_B5177A45_BB07_25EC_419F_3FFAEF0F13FF); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.39,
   "image": "this.AnimatedImageResource_1CFFFCA6_21CF_1924_41B5_2ADF7FB75D59",
   "pitch": -2.63,
   "yaw": 94.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EA31A6C_21C5_3924_41BB_A21CAAB20A5D",
 "maps": [
  {
   "hfov": 3.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -2.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00, this.camera_B6ED2A2B_BB07_25A4_41E4_EADDF6E3AC3E); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.82,
   "image": "this.AnimatedImageResource_1CFEDCA7_21CF_1924_41B2_933CFC1EA5EB",
   "pitch": -9.43,
   "yaw": -78.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E255A43_21C3_195C_41BF_F15D6DAA1583",
 "maps": [
  {
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350, this.camera_B5EF4CD0_BB07_DEE4_41CF_F007A841A9F0); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.78,
   "image": "this.AnimatedImageResource_1CE98C95_21CF_19E4_41B6_4D49C9FACB40",
   "pitch": -16.18,
   "yaw": -22.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F592C4F_203F_3964_4198_2A0F512A9203",
 "maps": [
  {
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43019720_57CC_0A9B_41CD_3154FA2D610B, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D36A48D_59D4_0D6A_41CE_E1C08548B88B, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.45,
   "image": "this.AnimatedImageResource_4D9A6462_59D4_0DDF_41B2_116F9B689721",
   "pitch": -33.23,
   "yaw": -46.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43507AD3_57CC_3BBC_4193_9AB9041DC73A",
 "maps": [
  {
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -33.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9, this.camera_B40BDCE6_BB07_DEAC_41E5_E855249CECB6); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.71,
   "image": "this.AnimatedImageResource_1CFE5CA7_21CF_1924_41BB_2C2041F1BA46",
   "pitch": -4.89,
   "yaw": -89.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_119F0861_21FD_795C_418C_82FA1324C548",
 "maps": [
  {
   "hfov": 3.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -4.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133, this.camera_B418DCDC_BB07_DE9C_41B4_24DD59B37F36); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.78,
   "image": "this.AnimatedImageResource_1CFFCCA7_21CF_1924_41AD_BE8D59B2C602",
   "pitch": -6.05,
   "yaw": 85.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_104C262C_21FD_0924_41AE_83929F9E5BE4",
 "maps": [
  {
   "hfov": 3.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -6.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925, this.camera_B6E78BC7_BB07_DAEC_41E1_A53FCB869FB4); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.02,
   "image": "this.AnimatedImageResource_1CE32C89_21CF_19EC_41B2_A48848C1695C",
   "pitch": -26.06,
   "yaw": 108.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34D860D8_204F_096C_4168_4A660CA7699C",
 "maps": [
  {
   "hfov": 4.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_B6E2BBBE_BB07_DA9C_41C1_F08080626116); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.53,
   "image": "this.AnimatedImageResource_1CE08C89_21CF_19EC_4161_192AFF803BFC",
   "pitch": -24.09,
   "yaw": 25.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34D839D9_204D_1B6D_41C0_679893BB4D26",
 "maps": [
  {
   "hfov": 6.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -24.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0, this.camera_B5130BDC_BB07_DA9C_41B5_FDE92B9AB98F); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.89,
   "image": "this.AnimatedImageResource_1CFE0CA6_21CF_1924_41A8_2A61098BFADB",
   "pitch": -9.52,
   "yaw": 91.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0CBDA83C_21C7_7924_4190_F2C9B6B73D54",
 "maps": [
  {
   "hfov": 4.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133, this.camera_B6EE7BD2_BB07_DAE4_41E0_BF4AF9823616); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "image": "this.AnimatedImageResource_1CFE7CA6_21CF_1924_41B1_8BE710BE0FF2",
   "pitch": -2.44,
   "yaw": -90.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E5C4E8C_21C5_19E4_41AC_A6C0CDEDEAB9",
 "maps": [
  {
   "hfov": 2.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -2.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_234730B3_3121_9FA2_41A3_51297DD76840, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_20AE00CD_3121_9FE6_41C0_CF097421C5DC, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.25,
   "image": "this.AnimatedImageResource_207790A6_3121_9FA2_419D_9EF091CEEC0F",
   "pitch": -15,
   "yaw": -19.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F1FDCC9_30E1_87EF_41B9_EE513C912C95",
 "maps": [
  {
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD, this.camera_B451ED0E_BB07_DF7C_41C5_0094666F379F); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_1CEA6C94_21CF_19E4_41AF_9692254B7594",
   "pitch": -21.1,
   "yaw": -73.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C3307E0_2043_F75C_41AA_3EF310792F38",
 "maps": [
  {
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8, this.camera_B4241CFD_BB07_DE9C_41CA_AC40E7E72CF4); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.3,
   "image": "this.AnimatedImageResource_1CEBBC94_21CF_19E4_41A4_F114AC531E39",
   "pitch": -13.56,
   "yaw": -157.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C6BCD2F_2044_FB24_41B4_9ADE0FA8F64C",
 "maps": [
  {
   "hfov": 2.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_464DF088_57FC_07AB_41D4_560017AB0BBA, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_409EC681_57CC_0B9C_41C5_385E07E9344A, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.58,
   "image": "this.AnimatedImageResource_40E2E654_57CC_0ABB_41B7_167FDEB95295",
   "pitch": -19.82,
   "yaw": -34.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_46E87AA6_57FC_7BE7_41CB_5F1E68D61C29",
 "maps": [
  {
   "hfov": 4.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -19.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43BEAD17_57D4_1EA4_41B7_AADCA34F9AC2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D306487_59D4_0D65_41C1_D040E66B2FB4, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.73,
   "image": "this.AnimatedImageResource_4D963460_59D4_0DDB_41D3_D3ABBA9A133E",
   "pitch": -27.4,
   "yaw": -55.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_452F9AE6_57D4_1B67_41D3_80CE3BF06056",
 "maps": [
  {
   "hfov": 4.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -27.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_433FAF75_57D4_3965_41D0_64D6FEB45CDC, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D311488_59D4_0D6B_41B8_DD8AA1AF77C1, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.87,
   "image": "this.AnimatedImageResource_4D96A461_59D4_0DDD_41CF_5354E5905CF7",
   "pitch": -23.93,
   "yaw": -115.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43BE90A6_57D4_07E7_419A_3D5641FB7FD5",
 "maps": [
  {
   "hfov": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -23.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6, this.camera_B5571AD1_BB07_DAE4_41DC_4C211B29163B); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.18,
   "image": "this.AnimatedImageResource_1CF0BCA0_21CF_19DB_41B4_2AE09888AA17",
   "pitch": -8.44,
   "yaw": -74.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B3069FF_21CC_FB25_41BB_1C0129DBB963",
 "maps": [
  {
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -8.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4D2D01AA_59F4_06AF_41C5_F1B7FCBB042B, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D233492_59D4_0D7E_41B9_F5C8FE5DBD73, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_4D83E466_59D4_0DA7_41BF_00F512255AA4",
   "pitch": -40.68,
   "yaw": -97.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DBA1CDD_59F4_3EE5_41C6_15EAD640AC4A",
 "maps": [
  {
   "hfov": 7.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -40.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_1CEFCC8E_21CF_19E7_419F_2855C9B00931",
   "pitch": -12.21,
   "yaw": 4.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_365F9074_205D_093B_41AA_493B17FEAB40",
 "maps": [
  {
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -12.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_B489BD7A_BB07_DFA4_41E1_B3885702F098); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5,
   "image": "this.AnimatedImageResource_1CEF0C92_21CF_19FC_41B4_3020312A4968",
   "pitch": -18.34,
   "yaw": 99.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37DD3AB1_2043_193D_4196_C886D308E984",
 "maps": [
  {
   "hfov": 5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -18.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_B4BBED8F_BB07_DF7C_41E6_866F110E6CD7); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.28,
   "image": "this.AnimatedImageResource_1CEF6C93_21CF_19FC_41B3_E7F7935AED6C",
   "pitch": -48.59,
   "yaw": -51.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38FF3D73_2045_1B3C_41B1_DFBA6AA6D99E",
 "maps": [
  {
   "hfov": 4.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -48.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4332189_DE42_B570_41DA_7335441D6620, this.camera_B5C27B5C_BB07_DB9C_41D0_1F53640D4B5A); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.2,
   "image": "this.AnimatedImageResource_1CE90C96_21CF_19E4_41BB_9E247C64BC97",
   "pitch": -10.06,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_01C5BA36_21C3_1924_4141_2A1C86F3F090",
 "maps": [
  {
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -10.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB, this.camera_B6C78B86_BB07_DB6C_41CE_2A7FB1B9CCAB); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.51,
   "image": "this.AnimatedImageResource_1CE93C96_21CF_19E4_41A3_B74339B4F971",
   "pitch": -17.88,
   "yaw": -154.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_01FF6714_21CF_08E4_4194_CF2EFDD1FFAC",
 "maps": [
  {
   "hfov": 3.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4DAB5CCC_59CC_3EEB_41B7_0DFCC025E195, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D38E48D_59D4_0D6A_41CC_3E03726A8CDD, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_4D9B4462_59D4_0DDF_41B0_BC91597482BC",
   "pitch": 1.48,
   "yaw": 157.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C548976_59CC_07A7_41D5_C19BC12B1B54",
 "maps": [
  {
   "hfov": 7.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9, this.camera_B50BFA68_BB07_25A4_41C8_76AE006C66CD); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.21,
   "image": "this.AnimatedImageResource_1CFC3CA8_21CF_192C_41A7_43431F30E2BC",
   "pitch": -4.01,
   "yaw": 75.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1306F3DB_21FD_0F6C_41B2_63B4B1614A0E",
 "maps": [
  {
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -4.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799, this.camera_B51EDA4F_BB07_25FC_41B3_1C64236C1F27); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.86,
   "image": "this.AnimatedImageResource_1CFDBCA8_21CF_192C_4192_19A714A5A602",
   "pitch": -7.61,
   "yaw": -80.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_138FC3B3_21FD_0F3C_41B7_CA0D5402039F",
 "maps": [
  {
   "hfov": 2.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -7.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C, this.camera_B5001A5C_BB07_259C_41D3_BACE467ACBF1); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.5,
   "image": "this.AnimatedImageResource_1CFD3CA8_21CF_192C_41A9_BA56D0B6AD6A",
   "pitch": -13.61,
   "yaw": -109,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_126F495C_21C4_FB64_41BF_E8527C52A677",
 "maps": [
  {
   "hfov": 4.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4, this.camera_B46D6D4E_BB07_DFFD_41E0_097061E080BF); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.03,
   "image": "this.AnimatedImageResource_1CF03CA0_21CF_19DB_41B8_C29DABAD5A9D",
   "pitch": -7.81,
   "yaw": 60.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A12A2D6_21C3_0964_41B7_831A46539169",
 "maps": [
  {
   "hfov": 4.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -7.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0, this.camera_B49E9D65_BB07_DFAC_41E2_56962CD1A177); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.73,
   "image": "this.AnimatedImageResource_1CF1ACA0_21CF_19DB_41BB_09F6D390CE06",
   "pitch": -4.82,
   "yaw": -87.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D7B8862_21C5_395F_41AD_4122B9B77538",
 "maps": [
  {
   "hfov": 3.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -4.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4DE12CCC_59F4_1EEB_41CC_B42029C97C3C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_4D2A5495_59D4_0D7A_41B6_D4F1F19E4D9E, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.67,
   "image": "this.AnimatedImageResource_4D898469_59D4_0DAD_41C6_AA7B19C3C512",
   "pitch": -15.84,
   "yaw": 15.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C7691CD_59F4_06E5_41D1_140C5C038DE8",
 "maps": [
  {
   "hfov": 10.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.84
  }
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "propagateClick": false,
 "data": {
  "name": "Banjar Hotspring"
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "width": 450,
 "borderSize": 0,
 "minWidth": 1,
 "text": "Banjar Hotspring",
 "verticalAlign": "middle",
 "top": "0%",
 "height": 60,
 "fontSize": 31,
 "shadow": false,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "paddingRight": 0
},
{
 "layout": "horizontal",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 1202.9,
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 60,
 "shadow": false,
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "paddingRight": 15,
 "data": {
  "name": "-button set container"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "id": "IconButton_564FBC47_4F67_840E_41C1_0980D8A94F01",
 "paddingLeft": 0,
 "width": 44,
 "maxWidth": 101,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_564FBC47_4F67_840E_41C1_0980D8A94F01.png",
 "mode": "toggle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, 0, null, null, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, 0, null, null, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, 0, null, null, false)",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_564FBC47_4F67_840E_41C1_0980D8A94F01_rollover.png",
 "buttonGroup": "g",
 "paddingTop": 0,
 "maxHeight": 101,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "paddingLeft": 0,
 "width": 44,
 "maxWidth": 101,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://www.google.com/maps/place/Banjar+Hot+Spring/@-8.2106057,114.9644437,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e6f62183e68d4d7:0xd6004ccdd7930d5e!8m2!3d-8.2106057!4d114.9670186!16s%2Fg%2F1q62gc8c0?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "paddingTop": 0,
 "maxHeight": 101,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "id": "IconButton_4F9909E2_59D4_06D8_41D3_05768F53BC30",
 "paddingLeft": 0,
 "width": 44,
 "maxWidth": 101,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_4F9909E2_59D4_06D8_41D3_05768F53BC30.png",
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://youtu.be/wLolG0hwnkU', '_blank')",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_4F9909E2_59D4_06D8_41D3_05768F53BC30_rollover.png",
 "paddingTop": 0,
 "maxHeight": 101,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF10CA1_21CF_19DD_419B_3CDE586A0428",
 "levels": [
  {
   "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE9CA6_21CF_1924_41B9_4EFE11690644",
 "levels": [
  {
   "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEE5C8D_21CF_19E5_41B4_7815622738B0",
 "levels": [
  {
   "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D90045E_59D4_0DE7_41D2_DE8E4D2C148D",
 "levels": [
  {
   "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE2AC87_21CF_19E4_41AE_C3A899E56405",
 "levels": [
  {
   "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE2EC87_21CF_19E4_416F_D1003783A1C7",
 "levels": [
  {
   "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE3DC88_21CF_19EC_4197_AB5F3F8142A8",
 "levels": [
  {
   "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF7AC9D_21CF_19E4_41AD_11760DB09DA0",
 "levels": [
  {
   "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF71C9D_21CF_19E4_41B6_7C7BB2BFCA23",
 "levels": [
  {
   "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF6DC9C_21CF_19E4_41BE_5C8FD2D7FEA1",
 "levels": [
  {
   "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF63C9C_21CF_19E4_4195_B2F919D59D24",
 "levels": [
  {
   "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF75C9D_21CF_19E4_41A0_1853D22CFCA0",
 "levels": [
  {
   "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF4CC9D_21CF_19E4_41B7_56A1FCF7202D",
 "levels": [
  {
   "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEEBC8D_21CF_19E5_41BE_CBA1672BD239",
 "levels": [
  {
   "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF6BC96_21CF_19E4_41B5_DB850F2D2138",
 "levels": [
  {
   "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE9BC96_21CF_19E4_414F_FC49DBE2B192",
 "levels": [
  {
   "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEE1C8D_21CF_19E5_41B4_6BB5F3F33CF8",
 "levels": [
  {
   "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4DAF845E_59D4_0DE7_41A1_E6A4EB91AE3F",
 "levels": [
  {
   "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFA8CA8_21CF_192C_41A8_79FEDF0BEE7D",
 "levels": [
  {
   "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1BC02112_21C5_08FC_41B2_85F349804E96",
 "levels": [
  {
   "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE58C85_21CF_19E4_41A3_FE5AD223A9C7",
 "levels": [
  {
   "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEB1C95_21CF_19E4_41A3_DA05BD17D08B",
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEB5C95_21CF_19E4_41B7_06EB44BEAC5A",
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_40E32654_57CC_0ABB_41CA_09C50595D8A2",
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D986461_59D4_0DDD_41CF_9281050CA749",
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D983461_59D4_0DDD_41D5_67091CD974F4",
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEE5C8B_21CF_19E3_4199_768AC3CCA6A9",
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEF9C8D_21CF_19E5_41B0_D6D8F21F2DEB",
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEFFC8D_21CF_19E5_4189_8ED1D6586C37",
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4DAE845E_59D4_0DE6_41B3_EC764217A621",
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE9FC96_21CF_19E4_41A3_578E85DAFA0C",
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE96C9C_21CF_19E4_4190_7B275B698D8F",
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D9C8463_59D4_0DDD_4168_D1506A2E6E95",
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D9D6463_59D4_0DDD_41C0_8B63BF08560B",
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE24C87_21CF_19E4_41AF_7F7993965E06",
 "levels": [
  {
   "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE39C88_21CF_19EC_41B1_1E18365F339D",
 "levels": [
  {
   "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_18271367_21C3_0F24_41B8_E2C4DA23E026",
 "levels": [
  {
   "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFF5CA7_21CF_1924_419A_A00A7FB32B18",
 "levels": [
  {
   "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFCDCA8_21CF_192C_4195_78D0EF226F42",
 "levels": [
  {
   "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEA8C94_21CF_19E4_41B0_C156DE03E9F8",
 "levels": [
  {
   "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEAFC94_21CF_19E4_41B9_70077AD52FE3",
 "levels": [
  {
   "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D950460_59D4_0DDB_41B7_9F93C3FFA7BE",
 "levels": [
  {
   "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE11C8A_21CF_19EC_41A3_EC1BAE1C624D",
 "levels": [
  {
   "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE17C8B_21CF_19EC_41A6_B1E8A208D9CD",
 "levels": [
  {
   "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEEDC8B_21CF_19EC_4197_2C194D0019F5",
 "levels": [
  {
   "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF43C9D_21CF_19E4_41A3_21D0DBD201E0",
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF5AC9D_21CF_19E4_41B1_2CA1A474DA0F",
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF51C9F_21CF_19E5_41AB_44298695849C",
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF28C9F_21CF_19E5_41B4_FEB3D285EB27",
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D80B464_59D4_0DDB_41C6_DAB96D75F900",
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF3DCA0_21CF_19DB_41B2_FA5AB9543F44",
 "levels": [
  {
   "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF34CA0_21CF_19DB_41BD_5C5590817138",
 "levels": [
  {
   "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D82A466_59D4_0DA7_41D3_E0D4EAD2CA4B",
 "levels": [
  {
   "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE0DC89_21CF_19EC_419E_5D5CE524CBAB",
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE01C89_21CF_19EC_41BA_AE63F7E33D93",
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE07C8A_21CF_19EC_41B9_4ED99B4F6AAF",
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE1CC8A_21CF_19EC_41B0_3D634A2A3B69",
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF2FC9F_21CF_19E5_41A7_A695E4D9A003",
 "levels": [
  {
   "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF27C9F_21CF_19E5_41AD_7F5764FB63CE",
 "levels": [
  {
   "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE50C86_21CF_19E4_41A1_527EB134E43F",
 "levels": [
  {
   "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE55C87_21CF_19E4_41BA_9081E4C850DB",
 "levels": [
  {
   "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CECDC93_21CF_19FC_41A0_5EAB7534CF03",
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEC2C93_21CF_19FC_418F_F47B2A53529A",
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEC7C93_21CF_19FC_41A1_45A85A88191D",
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0087FA8E_2E01_0E16_41AB_B7E1A4540F5C",
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D92E45F_59D4_0DE5_41BA_4856FEABCF64",
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D93445F_59D4_0DE5_41D2_B3E2656840FD",
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEDDC94_21CF_19E4_41AA_02C50531A1ED",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CED4C94_21CF_19E4_4156_05BF1F14586E",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D93B45F_59D4_0DE5_41C8_C3200E05D5FA",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D940460_59D4_0DDB_41A9_58A584D3AA3C",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE8DC95_21CF_19E4_419D_FD8986F1F410",
 "levels": [
  {
   "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE83C95_21CF_19E4_41B9_7490D25006C7",
 "levels": [
  {
   "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D99C462_59D4_0DDF_41BB_443D9703E7D9",
 "levels": [
  {
   "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFFFCA6_21CF_1924_41B5_2ADF7FB75D59",
 "levels": [
  {
   "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFEDCA7_21CF_1924_41B2_933CFC1EA5EB",
 "levels": [
  {
   "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE98C95_21CF_19E4_41B6_4D49C9FACB40",
 "levels": [
  {
   "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D9A6462_59D4_0DDF_41B2_116F9B689721",
 "levels": [
  {
   "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE5CA7_21CF_1924_41BB_2C2041F1BA46",
 "levels": [
  {
   "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFFCCA7_21CF_1924_41AD_BE8D59B2C602",
 "levels": [
  {
   "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE32C89_21CF_19EC_41B2_A48848C1695C",
 "levels": [
  {
   "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE08C89_21CF_19EC_4161_192AFF803BFC",
 "levels": [
  {
   "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE0CA6_21CF_1924_41A8_2A61098BFADB",
 "levels": [
  {
   "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE7CA6_21CF_1924_41B1_8BE710BE0FF2",
 "levels": [
  {
   "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_207790A6_3121_9FA2_419D_9EF091CEEC0F",
 "levels": [
  {
   "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEA6C94_21CF_19E4_41AF_9692254B7594",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEBBC94_21CF_19E4_41A4_F114AC531E39",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_40E2E654_57CC_0ABB_41B7_167FDEB95295",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D963460_59D4_0DDB_41D3_D3ABBA9A133E",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D96A461_59D4_0DDD_41CF_5354E5905CF7",
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF0BCA0_21CF_19DB_41B4_2AE09888AA17",
 "levels": [
  {
   "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D83E466_59D4_0DA7_41BF_00F512255AA4",
 "levels": [
  {
   "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEFCC8E_21CF_19E7_419F_2855C9B00931",
 "levels": [
  {
   "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEF0C92_21CF_19FC_41B4_3020312A4968",
 "levels": [
  {
   "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CEF6C93_21CF_19FC_41B3_E7F7935AED6C",
 "levels": [
  {
   "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE90C96_21CF_19E4_41BB_9E247C64BC97",
 "levels": [
  {
   "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CE93C96_21CF_19E4_41A3_B74339B4F971",
 "levels": [
  {
   "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D9B4462_59D4_0DDF_41B0_BC91597482BC",
 "levels": [
  {
   "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFC3CA8_21CF_192C_41A7_43431F30E2BC",
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFDBCA8_21CF_192C_4192_19A714A5A602",
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CFD3CA8_21CF_192C_41A9_BA56D0B6AD6A",
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF03CA0_21CF_19DB_41B8_C29DABAD5A9D",
 "levels": [
  {
   "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1CF1ACA0_21CF_19DB_41BB_09F6D390CE06",
 "levels": [
  {
   "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_4D898469_59D4_0DAD_41C6_AA7B19C3C512",
 "levels": [
  {
   "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpBackgroundColor": "#F7931E",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 116,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Drone View"
 },
 "popUpPaddingTop": 10,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "label": "Drone View",
 "height": "100%",
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "class": "DropDown",
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "popUpShadowColor": "#000000",
 "paddingTop": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpBackgroundColor": "#F7931E",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 96,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "data": {
  "name": "DropDown 2"
 },
 "popUpPaddingTop": 10,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "label": "Locket and Parking",
 "height": "100%",
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 5,
 "popUpShadowOpacity": 0,
 "class": "DropDown",
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "popUpShadowColor": "#000000",
 "paddingTop": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 114,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 3"
 },
 "height": 60,
 "popUpPaddingTop": 10,
 "fontSize": 12,
 "label": "Market",
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "class": "DropDown",
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 130,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 4"
 },
 "height": 60,
 "popUpPaddingTop": 10,
 "fontSize": 12,
 "label": "The Hotspring",
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "class": "DropDown",
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 152,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 5"
 },
 "height": 60,
 "popUpPaddingTop": 10,
 "fontSize": 12,
 "label": "Jakuzi and Spa",
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "class": "DropDown",
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "prompt": "All",
 "popUpPaddingLeft": 15,
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 136,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "arrowColor": "#FFFFFF",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 6"
 },
 "height": 60,
 "popUpPaddingTop": 10,
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "class": "DropDown",
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "propagateClick": false,
 "width": 60,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Settings"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "shadowSpread": 1,
 "minWidth": 1,
 "iconHeight": 17,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "height": 60,
 "mode": "toggle",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "shadowBlurRadius": 6,
 "shadow": false,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "class": "Button",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "iconWidth": 17,
 "cursor": "hand",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "fontWeight": "normal"
}],
 "width": "100%",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
