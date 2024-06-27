// dts-generator.jsによって生成されたファイルです。
// このファイルを直接編集しないでください。

declare class tDefault {
  popCallBacks: any;
  popPostMessageCallBacks: any;
  jss: any;
  popWindowPostMessageInitFlg: any;
  uniqueTimeValue: any;
  cacheImages: any;
  init(): void;
  getElement(a: any): any;
  toInt(a: any): any;
  toFloat(a: any): any;
  toNumber(a: any): any;
  makeKey(a: any): any;
  getStringDateToObject(a: any): any;
  getDateToObject(a: any): any;
  getCalStrDate(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
  getCalDate(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
  checkEmailFormat(a: any): any;
  checkTelFormat(a: any, b: any): any;
  checkPostcodeFormat(a: any): any;
  checkUrlFormat(a: any): any;
  getOneByteCharacter(a: any): any;
  getTwoByteCharacter(a: any): any;
  getOneKanaToTwoKana(a: any): any;
  getTwoKanaToOneKana(a: any): any;
  getKanaToHira(a: any): any;
  getHiraToKana(a: any): any;
  getArrayIndex(a: any, b: any): any;
  fillZero(a: any, b: any): any;
  cancelTextSelect(): void;
  clone(a: any): any;
  isArray(a: any): any;
  inArray(a: any, b: any): any;
  getIncludeSize(a: any, b: any, c: any, d: any, e: any, f: any): any;
  getFillSize(a: any, b: any, c: any, d: any, e: any, f: any): any;
  jsonDecode(a: any): any;
  jsonEncode(a: any): any;
  getServerData(a: any): any;
  getIntArray(a: any): any;
  splitSpace(a: any): any;
  focusFirstTarget(a: any): any;
  getFocusTarget(): any;
  blur(): void;
  viewPopWindow(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, m: any): any;
  viewPopWindowPostMessage(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, m: any): any;
  closeMyWindow(a: any): void;
  popCallBack(a: any, b: any, c: any): any;
  popPostMessageCallBack(a: any): any;
  popPostMessageCallBackFromChild(a: any, b: any, c: any, d: any): void;
  getCutText(a: any, b: any, c: any): any;
  getParseGet(): any;
  setCursor(a: any, b: any, c: any): any;
  getCursor(a: any): any;
  getPostcodeToAddress(a: any, b: any, c: any): any;
  availableLocalData(): any;
  getLocalData(a: any): any;
  setLocalData(a: any, b: any): any;
  removeLocalData(a: any): any;
  bytesToSize(a: any): any;
  checkMobile(): any;
  getDelayEvent(): any;
  isElement(a: any): any;
  getPrefectures(): any;
  getPrefectureGroups(): any;
  getMoonAge(a: any): any;
  loadJs(a: any, b: any, c: any, d: any, e: any): any;
  getRelativeTimeElement(a: any, b: any): any;
  getRgb(a: any): any;
  getRgb16(a: any): any;
  getImageUniquePath(a: any, b: any): any;
  setImageCache(a: any, b: any): any;
  getImageCache(a: any): any;
  copy(a: any): any;
}

declare class tEvent {
  mobileFlg: any;
  isPassiveSupportedFlg: any;
  singleTouchInitFlg: any;
  singleIdentifier: any;
  oldSingleIdentifier: any;
  listeners: any;
  listenerIndex: any;
  init(): void;
  initSingleTouch(): void;
  setSingleTouchIdentifier(a: any, b: any): any;
  isSingleTouch(a: any, b: any): any;
  initPassiveSupported(): void;
  addNativeEvent(a: any, b: any, c: any, d: any): void;
  removeNativeEvent(a: any): any;
}

declare class tGameAcn {
  parent: tGameMain;
  init(a: any): void;
}

declare class tGameAdventurerGuild {
  parent: tGameMain;
  questMaxNum: any;
  nextCreateTime: any;
  quests: any;
  attackedList: any;
  iconInfo: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  deleteReceivedQuest(a: any): any;
  getCharactorQuests(a: any): any;
  removeCharactor(a: any): any;
  removeMap(a: any): void;
  getTownQuestTarget(a: any): any;
  getTownQuestTargetFromMapId(a: any): any;
  createTownQuests(a: any): any;
  getQuestFreeCharactors(a: any): any;
  createTownQuest(a: any, b: any, c: any): any;
  createTownJikeidanQuest(a: any, b: any): any;
  createTownQuest_1(a: any, b: any, c: any, d: any): any;
  createTownQuest_2(a: any, b: any, c: any, d: any): any;
  createTownQuest_3(a: any, b: any, c: any, d: any): any;
  createTownQuest_4(a: any, b: any, c: any, d: any): any;
  createTownQuest_4_field(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_5(a: any, b: any, c: any, d: any): any;
  createTownQuest_6(a: any, b: any, c: any, d: any): any;
  createTownQuest_7(a: any, b: any, c: any, d: any): any;
  createTownQuest_8(a: any, b: any, c: any, d: any): any;
  createTownQuest_9(a: any, b: any, c: any, d: any): any;
  createTownQuest_10(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_11(a: any, b: any, c: any, d: any): any;
  createTownQuest_12(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_13(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_14(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_15(a: any, b: any, c: any, d: any, e: any): any;
  getQuestSentence(a: any, b: any): any;
  getQuestSentence_1(a: any, b: any): any;
  getQuestSentence_2(a: any, b: any): any;
  getQuestSentence_3(a: any, b: any): any;
  getQuestSentence_4(a: any, b: any): any;
  getQuestSentence_4_field(a: any, b: any): any;
  getQuestSentence_5(a: any, b: any): any;
  getQuestSentence_6(a: any, b: any): any;
  getQuestSentence_7(a: any, b: any): any;
  getQuestSentence_8(a: any, b: any): any;
  getQuestSentence_9(a: any, b: any): any;
  getQuestSentence_10(a: any, b: any): any;
  getQuestSentence_11(a: any, b: any): any;
  getQuestSentence_12(a: any, b: any): any;
  getQuestSentence_13(a: any, b: any): any;
  getQuestSentence_14(a: any, b: any): any;
  getQuestSentence_15(a: any, b: any): any;
  setMyTown(a: any, b: any, c: any): void;
  getQuestRewordMessage(a: any): any;
  addReceived(a: any, b: any, c: any): any;
  initReceived_1(a: any, b: any): any;
  initReceived_2(a: any, b: any): any;
  initReceived_3(a: any, b: any): any;
  initReceived_4(a: any, b: any): any;
  initReceived_5(a: any, b: any): any;
  initReceived_6(a: any, b: any): any;
  initReceived_7(a: any, b: any): any;
  initReceived_8(a: any, b: any): any;
  initReceived_9(a: any, b: any): any;
  initReceived_10(a: any, b: any): any;
  initReceived_11(a: any, b: any): any;
  initReceived_12(a: any, b: any): any;
  initReceived_13(a: any, b: any): any;
  initReceived_14(a: any, b: any): any;
  initReceived_15(a: any, b: any): any;
  finishQuest(a: any, b: any, c: any): any;
  failureQuest(a: any, b: any, c: any, d: any, e: any): any;
  clearQuestData(a: any, b: any, c: any): any;
  checkTimeOver(a: any): any;
  getTowns(a: any): any;
  getTownsFromPosition(a: any, b: any): any;
  getAffectAnswer(a: any): any;
  affectAnswer(a: any): void;
  affectAnswer_2(a: any, b: any): void;
  affectAnswer_3(a: any, b: any): void;
  affectAnswer_9(a: any, b: any): void;
  getTargetItem(a: any): any;
  getTargetQuestItem(a: any): any;
  createID(): any;
  searchReceivedQuest(a: any): any;
  getFieldObjectToQuest1Name(a: any): any;
  getQuestFinishFameExp(a: any, b: any, c: any): any;
  getQuestFinishGaeExp(a: any, b: any, c: any): any;
  changeMapEvent(a: any): void;
  createQuestRank(): any;
  createQuestItem_2(a: any): any;
  createQuestItem_3(a: any): any;
  updateAttackedList(): void;
  getAttackedList(): any;
  calQuestIconData(): void;
  addQuestSentenceCommon(a: any, b: any, c: any): void;
  isSokuji(a: any): any;
  actSokuji(a: any): void;
  createQuestTargetType(a: any, b: any): any;
  guildpointkau(a: any, b: any): void;
  guildpointkau2(a: any, b: any): void;
  getGuildPointBottomData(): any;
}

declare class tGameAdventurerGuildConfirmWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewQuestMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  viewInfoWindow(a: any): any;
}

declare class tGameAdventurerGuildWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewQuestMaxNum: any;
  cursor: any;
  talkData: any;
  init(a: any): void;
  clear(): void;
  viewWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  updateQuests(): void;
  viewInfoWindow(a: any): any;
  viewConfirm(a: any): any;
  checkFinish(a: any): any;
  getSuccessItem(a: any): void;
  addSuccessFaith(a: any, b: any): any;
  firstAccess(a: any, b: any): void;
  getGmChara(a: any): any;
  loadTalkData(a: any): any;
  firstGmAccess(a: any): void;
  gmNohin(a: any): void;
  inGuildMokutekichi(a: any, b: any): void;
  getQuestMessage(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_guildtargetitem(a: any, b: any): void;
}

declare class tGameAffectMap {
  parent: tGameMain;
  init(a: any): void;
}

declare class tGameAkumuDungeon {
  parent: tGameMain;
  init(a: any): void;
  isSetAkumu(a: any): any;
  getDungeonLevel(a: any): any;
  akumuidomu(a: any): any;
  createDungeon(a: any): any;
  bossGekiha(a: any, b: any): any;
}

declare class tGameAllocateStatusWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  cursor: any;
  targets: any;
  init(a: any): void;
  clear(): void;
  viewSetWindow(a: any, b: any): void;
  view(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  drawSelectColumnData(a: any, b: any): void;
  changeSelectColumnItem(a: any): void;
  drawColumnData(a: any, b: any): any;
  okButtonColumnItem(a: any): any;
  viewPoint(): void;
}

declare class tGameAnimalWood {
  parent: tGameMain;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  getMapId(): any;
  createMap_act(a: any): any;
  addCharactor(a: any, b: any): any;
  affectBox(a: any, b: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_createanimalwood(a: any, b: any): any;
}

declare class tGameBaby {
  parent: tGameMain;
  data: any;
  range: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  clearDatas(): void;
  createBaby(a: any, b: any): any;
  getTogetherCharas(): any;
  sleepTogether(a: any): void;
  seicho(a: any, b: any): any;
  setHikitsugiData(a: any, b: any): any;
}

declare class tGameBazaarGenerator {
  parent: tGameMain;
  nextUpdateTime: any;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_createbazaar(a: any, b: any): any;
}

declare class tGameBgmResource {
  parent: tGameMain;
  soundData: any;
  playSounds: any;
  oggOrM4a: any;
  fadeTime: any;
  fadeCount: any;
  caches: any;
  init(a: any): void;
  loadSound(a: any): void;
  initLoad(a: any): void;
  getAudio(a: any): any;
  loadPreload(a: any): void;
  getPath(a: any): any;
  loadBuffer(a: any): any;
  stopSound(a: any): any;
  startSound(a: any): any;
  removeSound(a: any, b: any): any;
  insertPlay(a: any, b: any): any;
  insertPlay2(a: any, b: any, c: any): any;
  removeAllSound(a: any): void;
  play(a: any, b: any, c: any, d: any): any;
  setVolume(a: any): any;
  frameAction(a: any): void;
  reflectOption(a: any): void;
  overwriteBgm(a: any): void;
  isPlayTargetBGM(a: any): any;
}

declare class tGameBlacksmith {
  parent: tGameMain;
  viewData: any;
  maxNum: any;
  gineikesshoMaxNum: any;
  init(a: any): void;
  getMaterialMaxNum(a: any): any;
  getGineikesshoMaxNum(): any;
  getSoukesshoNeedNum(): any;
  create(a: any, b: any, c: any, d: any): void;
  createMember(a: any, b: any, c: any, d: any): void;
  selectMaterial(a: any, b: any): void;
  selectEquipmentType2(a: any): any;
  selectSoukessho(a: any): any;
  getSuccessRate(a: any): any;
  getMaxRank(): any;
  actBlacksmith(): void;
  blacksmithResult(a: any, b: any): any;
  getExp(a: any, b: any, c: any): any;
  bunkai(a: any, b: any): void;
  getSoukesshoItems(): any;
  getGineikesshoItems(): any;
}

declare class tGameButsu {
  parent: tGameMain;
  init(a: any): void;
  tryCreate(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_butsuevent1(a: any, b: any): any;
  oneActionFinishAction_butsubossgekiha(a: any, b: any): any;
  oneActionFinishAction_butsufirst(a: any, b: any): any;
  oneActionFinishAction_butsuchestopen(a: any, b: any): void;
  viewMap(a: any): void;
  deleteButsuCharactor(): any;
  selectAnswer(a: any): any;
  affectAnswer(a: any): void;
  calBasho(): any;
  affectObject(a: any): any;
  inTargetMap(a: any, b: any, c: any): any;
  createTargetMap(a: any, b: any): void;
  setTargetEvent(a: any, b: any): any;
  action_playerAffect(a: any, b: any, c: any, d: any): any;
  action_playerAffect2(a: any, b: any, c: any, d: any): any;
  keibiKaiwa(a: any, b: any): void;
  keibiEncount(a: any): any;
}

declare class tGameCalc {
  parent: tGameMain;
  init(a: any): void;
}

declare class tGameCasino {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  exCoin(a: any): void;
  exItem(a: any, b: any): void;
  createExItems(): any;
}

declare class tGameCastleGenerator {
  parent: tGameMain;
  init(a: any): void;
  createCastleWithLoad(a: any, b: any): void;
  createCastle(a: any, b: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
}

declare class tGameChangeProfile {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  viewMember(a: any): void;
  viewOne(a: any, b: any, c: any, d: any): void;
}

declare class tGameCharactor {
  parent: tGameMain;
  charas: any;
  teams: any;
  levelFraction: any;
  limit: any;
  talkResetAddTime: any;
  playerTeamMemberLimitNum: any;
  maxDamage: any;
  conditionStatusPairs: any;
  statusMinMax: any;
  ctypeObjects: any;
  findPoliceConditions: any;
  init(a: any): void;
  getToPlayerRelation(a: any): any;
  getTeamRelation(a: any, b: any): any;
  getBattleCharactors(a: any, b: any): any;
  updateTeamRelation(a: any, b: any, c: any): any;
  addTeam(a: any): any;
  addTeamMember(a: any, b: any, c: any): any;
  restoreEventTeamMembers(a: any, b: any, c: any): any;
  removeEventTeamMember(a: any): any;
  removeTeamMember(a: any, b: any, c: any, d: any): any;
  removeTeam(a: any): any;
  removeTeam0(a: any): any;
  resetWaitTimeStorage(): void;
  addTargetCharactor(a: any): any;
  addMobCharactor(a: any): any;
  addAdventurerCharactor(a: any): any;
  addPeddlerCharactor(a: any): any;
  addPoliceCharactor(a: any): any;
  addSlavetraderCharactor(a: any): any;
  addSojiyaCharactor(a: any): any;
  addNoriaiBashaCharactor(a: any): any;
  addCriminalCharactor(a: any): any;
  addEnemy(a: any): any;
  addAnimal(a: any): any;
  getSlaveCharactor(a: any): any;
  addCharactor(a: any, b: any): any;
  deleteCharactor(a: any, b: any): any;
  getMapCharactors(a: any, b: any, c: any, d: any, e: any): any;
  isCantActCondition(a: any): any;
  affect(a: any): any;
  actCondition(a: any, b: any, c: any): any;
  musicAction(a: any): any;
  action(a: any): any;
  action2(a: any, b: any): any;
  action_forceAction(a: any, b: any, c: any, d: any): any;
  action_teamTsuibi(a: any, b: any, c: any): any;
  action_mapAction(a: any, b: any): any;
  action_targetMove(a: any, b: any, c: any): any;
  action_targetAction(a: any, b: any, c: any): any;
  action_playerAffect(a: any, b: any, c: any): any;
  action_playerAffectKojiki(a: any, b: any, c: any, d: any): any;
  action_randomMove(a: any, b: any, c: any): any;
  action_mudaAction(a: any, b: any): any;
  action_cure(a: any, b: any, c: any, d: any): any;
  action_support(a: any, b: any, c: any, d: any): any;
  action_curecdt(a: any, b: any, c: any, d: any): any;
  action_kuufuku(a: any, b: any, c: any): any;
  action_noroikeshi(a: any, b: any, c: any): any;
  action_kantei(a: any, b: any, c: any): any;
  action_sokuji(a: any, b: any, c: any): any;
  action_actionData(a: any, b: any, c: any, d: any, e: any, f: any): any;
  action_moveTekiseiKyori(a: any, b: any, c: any, d: any): any;
  action_actionA(a: any, b: any): any;
  action_actionP(a: any, b: any): any;
  action_fovPoliceBattle(a: any, b: any): any;
  action_actionN(a: any, b: any): any;
  action_actionL(a: any, b: any): any;
  action_buyItem(a: any, b: any, c: any): any;
  action_open(a: any, b: any, c: any): any;
  getLevelDivision(a: any): any;
  getPercent(a: any): any;
  getLevel(a: any, b: any, c: any, d: any): any;
  addExp2(a: any, b: any, c: any, d: any, e: any): any;
  addExp(a: any, b: any, c: any, d: any, e: any): any;
  loseExp(a: any, b: any, c: any, d: any, e: any): any;
  addMoney(a: any, b: any, c: any, d: any, e: any): any;
  removeItem(a: any, b: any, c: any, d: any): any;
  addItem(a: any, b: any, c: any, d: any): any;
  addSkill(a: any, b: any, c: any, d: any, e: any, f: any): any;
  addSkillAction(a: any, b: any, c: any, d: any, e: any, f: any): any;
  removeSkillAction(a: any, b: any, c: any, d: any, e: any): any;
  giftItem(a: any, b: any, c: any, d: any, e: any): any;
  giftItem2(a: any, b: any, c: any, d: any, e: any): any;
  giftItem3(a: any, b: any, c: any, d: any, e: any, f: any): any;
  buyItem(a: any): any;
  buySkill(a: any): any;
  sellItem(a: any): any;
  okuItem(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): any;
  okuItemOkuLog(a: any, b: any, c: any, d: any): void;
  getPickupItemMaxNum(a: any, b: any): any;
  pickupItem(a: any): any;
  addFriendship(a: any, b: any, c: any): any;
  addFame(a: any, b: any, c: any): any;
  addGae(a: any, b: any, c: any): any;
  updateTalkResetTime(a: any): void;
  checkTalkFsp(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  setPlayerPosition(a: any, b: any, c: any): any;
  joinPlayerTeam(a: any, b: any, c: any, d: any, e: any, f: any): any;
  setFukidashi(a: any): any;
  getFspTalkTarget(a: any): any;
  setFukidashiTalk(a: any, b: any): any;
  setCommonFukidashiTalk(a: any, b: any, c: any): any;
  setEmotion(a: any): any;
  removeEmotion(a: any): any;
  removeEquip(a: any): any;
  setEquipFromItem(a: any): any;
  setStatus(a: any): any;
  checkAttack(a: any, b: any): any;
  attack(a: any, b: any, c: any): any;
  longAttack(a: any, b: any, c: any): any;
  usePlayerSkillAction(a: any, b: any, c: any, d: any, e: any, f: any): any;
  isCanAction(a: any, b: any, c: any, d: any, e: any): any;
  isCanUseItem(a: any, b: any): any;
  isCanUseSkillAction(a: any, b: any): any;
  getSkillActionCost2(a: any, b: any): any;
  getSkillActionCost(a: any, b: any): any;
  getCdtBukizokusei(a: any): any;
  getAttackSkillAction(a: any): any;
  getLongAttackSkillAction(a: any): any;
  useSkillAction(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any): any;
  nonBattleAction(a: any, b: any, c: any): any;
  getAptitudeDistance(a: any): any;
  battleAction(a: any, b: any, c: any): any;
  setBattleTarget(a: any): any;
  takeSkillAction(a: any, b: any, c: any, d: any): any;
  getKnockDownExp(a: any, b: any): any;
  isEnableTarget(a: any): any;
  setCondition(a: any, b: any, c: any, d: any, e: any): any;
  removeAllCondition(a: any): any;
  removeCondition(a: any, b: any, c: any): any;
  setAdventurerMap(a: any): void;
  usedItem2(a: any, b: any): any;
  usedItem(a: any, b: any): any;
  getCharactorFsp(a: any, b: any): any;
  getCharactorFame(a: any, b: any): any;
  getCharactorGae(a: any, b: any): any;
  addValue(a: any): any;
  getItemMaxSpace(a: any): any;
  getItemSpace(a: any): any;
  getCharactorMoney(a: any, b: any, c: any): any;
  searchCharactorItem(a: any, b: any): any;
  setCharactorPosition(a: any, b: any): any;
  addLogEffects(a: any, b: any): void;
  getWalkChipset(a: any, b: any): any;
  turnToCharactor(a: any, b: any, c: any, d: any): void;
  isDeath(a: any): any;
  setMoveChipset(a: any): void;
  setTrunToDirection(a: any, b: any, c: any): void;
  setTurnToPosition(a: any, b: any, c: any, d: any): any;
  stepCharactor(a: any): void;
  getCantMoveIdx(a: any, b: any, c: any): any;
  dropItem(a: any, b: any, c: any, d: any): any;
  calDamage(a: any): any;
  autoCure(a: any): void;
  getExp(a: any, b: any, c: any, d: any, e: any): any;
  setLevelUpGrowthStatus(a: any, b: any): any;
  addSkillActionExp(a: any, b: any, c: any): any;
  getFriendshipExp(a: any, b: any, c: any): any;
  getFameExp(a: any, b: any): any;
  getGaeExp(a: any, b: any): any;
  tryNpcJoinTeam(a: any): any;
  requestJoinTeam(a: any, b: any): any;
  requestJoinMyMember(a: any, b: any): any;
  requestJoinMyMember2(a: any, b: any): any;
  isBlockRequestJoin(a: any): any;
  requestRemoveMyTown(a: any, b: any): any;
  requestRemoveMyTeam(a: any, b: any): any;
  requestMyTownBefore(a: any, b: any): any;
  requestMyTown(a: any, b: any): any;
  isEnableRemovePlayerTeam(a: any): any;
  removePlayerTeam_checkQuest(a: any): void;
  removePlayerTeam(a: any, b: any, c: any): any;
  playerBodilyFunctions(a: any): any;
  sleepPlayer(a: any, b: any, c: any): void;
  deathAction(a: any, b: any, c: any, d: any): any;
  deleteChangeMapCharactor(): void;
  timeRevival(a: any): void;
  eventRevival(a: any): any;
  clearMoveMapCondition(a: any): void;
  setHomeMap(a: any, b: any): any;
  gotoHospital(a: any, b: any): void;
  setPoliceMap(a: any): void;
  setSojiyaMap(a: any): void;
  setNoriaiBashaMap(a: any): void;
  setPeddlerMap(a: any): void;
  setCriminalMap(a: any): any;
  setMyTownCharaMap(a: any): void;
  setSubTownCharaMap(a: any): void;
  isFreeCharactor(a: any, b: any): any;
  getFreeCharactors(): any;
  judgeCondition(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
  getConditionDefaultValue(a: any, b: any, c: any): any;
  removeOnemapTeam(a: any): void;
  addDeathAction(a: any, b: any, c: any): any;
  clearDeathAction(a: any): void;
  inFlg(a: any, b: any): any;
  setFlg(a: any, b: any): any;
  removeFlg(a: any, b: any): any;
  kantei(a: any): void;
  kantei2(a: any): void;
  kantei3(a: any): void;
  requestEnchantment(a: any, b: any): void;
  requestRustRepair(a: any): void;
  stayInn(a: any): void;
  allkantei(a: any): void;
  allnoroikeshi(a: any): void;
  noroiwotoku(a: any): void;
  noroiwotoku2(a: any): void;
  noroiwotoku3(a: any): void;
  noroiwotoku4(a: any): void;
  fukkatusaseru(a: any): void;
  hospitalmeibomiru(a: any): void;
  isPlayerTeamMemberSpaceNum(): any;
  isPlayerTeamMemberFull(a: any): any;
  isMyMemberFull(a: any): any;
  getHitRatio(a: any): any;
  getCriticalRatio(a: any): any;
  setActionData(a: any, b: any): any;
  autoEquipment(a: any): any;
  pickupItemFoot(a: any, b: any): any;
  isFavoriteItem(a: any, b: any): any;
  teleportNearCharactor(a: any, b: any, c: any): any;
  getOverlookMessage(a: any): any;
  setEventChara(a: any): any;
  removeEventChara(a: any): any;
  requestKoibito(a: any, b: any): void;
  requestKoibito_act(a: any, b: any): any;
  requestKekkon(a: any, b: any): void;
  requestKekkon_act(a: any, b: any): any;
  viewChestOpenMessage(a: any): any;
  npcGrowth(a: any): any;
  removeNpcCharactor(): void;
  fillNpcCharactor(): void;
  criminalBattle(a: any): any;
  jobChange(a: any, b: any, c: any): any;
  getTalkHomeMap(a: any): any;
  getHomeMap(a: any): any;
  getMemberSumSkillLevel(a: any, b: any): any;
  fovBattlePolice(): any;
  pushCharaPosition(a: any, b: any, c: any, d: any, e: any, f: any): any;
  getCharactorCantPositionIdx(a: any, b: any): any;
  nakanaorishiyo(a: any, b: any): any;
  getAttackDamageAction(a: any, b: any, c: any): any;
  getAttackKaihiAction(a: any, b: any, c: any): any;
  isDyingValue(a: any, b: any): any;
  updatePoliceRelation(): void;
  setFovPoliceBattle(a: any): any;
  getCharactorItemInfo(a: any, b: any): any;
  getShopMinMoney(a: any): any;
  updateAllEquipment(): void;
  setAutoEquipment(a: any): any;
  getJakutaiLevel(a: any): any;
  isExpHakiMask(a: any): any;
  getJobRandomActionSkill(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_criminalaround(a: any, b: any): any;
  convertName(a: any): any;
  getActionMyMembers(a: any, b: any): any;
  getShopRankScale(a: any): any;
  updateShopRankScale(a: any, b: any): any;
  addFirstMoney(a: any, b: any): void;
  addFirstItem(a: any): void;
  isStealCondition(a: any): any;
  isEnableNakanaori(a: any): any;
  addFriendshipLog(a: any, b: any, c: any): void;
  addFameLog(a: any, b: any, c: any): void;
  addGaeLog(a: any, b: any, c: any): void;
  addLevelUpBonus(a: any): void;
  specialAffect(a: any, b: any): any;
  actEventTeamRemove(a: any): any;
  checkEventTeamRemove(a: any, b: any): void;
  removeLongStayCharactors(a: any): void;
  getTargetItem(a: any, b: any, c: any): any;
  getTargetItem2(a: any, b: any): any;
  chikakuShisetsu(a: any, b: any): void;
  timeHungry(a: any, b: any, c: any): void;
  viewNpcJoinTeamMessage(a: any, b: any, c: any): void;
  setAroundPosition(a: any, b: any): any;
  isAkumu(a: any): any;
  viewLineEffect(a: any, b: any, c: any): any;
  getFukkatsuPrice(a: any, b: any, c: any): any;
  getFukkatsuPrice2(a: any): any;
  setZentaishiji(a: any, b: any, c: any, d: any): any;
  specialAffect_bokenshadoko(a: any, b: any): any;
  getActionTurnShohi(a: any, b: any, c: any): any;
  setRemoveNonActionConditionValue(a: any): void;
  checkAroundBed(a: any): void;
  addHojuCharactor(a: any, b: any): any;
  getCharactorObjects(a: any, b: any): any;
  hoju(a: any): void;
  hojuCriminalCharactor(): any;
  shojiItemKasane(a: any, b: any): any;
  kojikiKaiwa(a: any, b: any): void;
  ketugoHogyokus(a: any): any;
  recipeAutoUse(a: any): any;
  getMytownNokoriNum(): any;
  getMySumNum(): any;
  getMymemberiNum(a: any): any;
  skillNarau(a: any): any;
  allBattleReset(): any;
  setPlayerItemRecord(a: any): void;
  setPlayerItemRecordFromEquipment(): void;
  changeHmapType(a: any): any;
  getHajimarinochiKanteiPrice(): any;
  removeNakamaFuyouDeathAction(a: any): void;
  fixDoreiMonsterMoney(): void;
  fixSkillActionID(): void;
  addZokuseiFuyo(a: any, b: any, c: any): any;
  viewMap_fix(a: any): void;
  fixTeam(): void;
  clearFukidashiAll(): void;
  checkReuseItem(a: any, b: any): any;
  getReuseItemMinutes(a: any, b: any): any;
  setReuseItem(a: any, b: any, c: any): void;
  refreshItemReuseTime(): void;
  getRyouriFromFukuro(a: any): any;
  ryourifukurokure(a: any): void;
  shokuzaifukurokure(a: any): void;
  autoTownFacilityUse(a: any): void;
  autoTownFacilityUse_kantei(a: any): any;
  autoTownFacilityUse_noroikeshi(a: any): any;
  autoTownFacilityUse_rustrepair(a: any): any;
  autoTownFacilityUse__targetChara(a: any, b: any, c: any): any;
  getEquipmentIds(a: any, b: any): any;
  birthdayLog(a: any): void;
  setKinenbi(a: any, b: any): any;
  checkCdtTarget(a: any): any;
  addItemWithFukuro(a: any, b: any, c: any, d: any): void;
  viewAddItemLog(a: any, b: any, c: any, d: any): void;
  npcShiokuri(a: any): void;
  getItemSpaceMaxNum(a: any, b: any): any;
}

declare class tGameCharactorData {
  parent: tGameMain;
  characotrData: any;
  allocateStatusData: any;
  allocateStatusVals: any;
  allocateStatusIdxs: any;
  randomEnemySheet: any;
  randomBossSheets: any;
  randomSlaveSheet: any;
  randomRaceEnemySheet: any;
  randomRaceBossSheets: any;
  skillExpRange: any;
  elv: any;
  elv2: any;
  belv: any;
  belv2: any;
  selv: any;
  selv2: any;
  bselv: any;
  bselv2: any;
  kelv: any;
  kelv2: any;
  kbelv: any;
  kbelv2: any;
  kselv: any;
  kselv2: any;
  kbselv: any;
  kbselv2: any;
  init(a: any): void;
  initLoad(a: any): void;
  setLevel(a: any, b: any): void;
  isHiddenStatus(a: any): any;
  getCharactorData(a: any, b: any, c: any, d: any, e: any): any;
  getSkillName(a: any): any;
  getItem(a: any, b: any, c: any): any;
  setEquipment(a: any, b: any, c: any, d: any, e: any, f: any): any;
  getLevelToRank(a: any, b: any, c: any): any;
  getRankToLevel(a: any): any;
  setEquipment_quality(a: any, b: any): void;
  setEquipment_weapons(a: any, b: any, c: any, d: any, e: any): any;
  setEquipment_lweapons(a: any, b: any, c: any, d: any, e: any): any;
  setEquipment_armors(a: any, b: any, c: any, d: any, e: any): any;
  setRandomEnemySheet(): void;
  setRandomRaceEnemySheet(): void;
  setRandomBossSheet(): void;
  setRandomRaceBossSheet(): void;
  setRandomSlaveSheet(): void;
  createRandomEnemy(a: any): any;
  createRandomRaceEnemy(a: any): any;
  getRandomBossId2(a: any, b: any, c: any): any;
  getRandomBossId(a: any, b: any): any;
  createRandomSlaveId(a: any): any;
  getAllocateStatusSheet(a: any): any;
  setAllocateStatusTargetLevel(a: any): any;
  setAllocateStatusRandom(a: any, b: any): any;
  getAllocateStatusGetPoint(a: any): any;
  setSkills(a: any, b: any, c: any): any;
  setAskills(a: any, b: any, c: any, d: any, e: any): any;
  convertTypeToQuality(a: any): any;
  convertTypeToTarget(a: any): any;
  getJobBaseStatus(a: any): any;
  getFavoriteItems(): any;
  convertActionSkillLevel(a: any): void;
  setSpecialEquipment(a: any): any;
  getRaceNums(a: any): any;
  get_elv(): any;
  get_elv2(): any;
  get_belv(): any;
  get_belv2(): any;
  get_selv(): any;
  get_selv2(): any;
  get_bselv(): any;
  get_bselv2(): any;
}

declare class tGameCharactorEquipRuleWindow {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  viewCharactorRuleWindow(a: any, b: any): void;
}

declare class tGameCharactorRuleWindow {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  viewCharactorRuleWindow(a: any, b: any): void;
  viewCharactorRule2Window(a: any, b: any): void;
  viewCharactorRule3Window(a: any, b: any): void;
  getCharaRule_townruleKantei(a: any): any;
  getCharaRule_townruleNoroikeshi(a: any): any;
  getCharaRule_townruleRustrepair(a: any): any;
  getCharaRule_usenoroiitem(a: any): any;
}

declare class tGameChikaMakyo {
  parent: tGameMain;
  init(a: any): void;
  refreshDungeon(): any;
  createDungeon(a: any): any;
  createChikaMakyo(a: any, b: any): any;
  firstGmAccess(a: any): void;
  setMaxFloor(a: any): void;
  resultGmAccess(a: any): void;
  createDungeonFloorEnd(a: any, b: any): any;
  getHoshuConvert(a: any): any;
}

declare class tGameChipsetResource {
  parent: tGameMain;
  chipsetLink: any;
  chipsetData: any;
  counters: any;
  init(a: any): void;
  getUseData(a: any): any;
  getUseDataFromMap(a: any): any;
  loadImage(a: any, b: any, c: any): void;
  loadLinkJson(a: any): void;
  loadAllImage(a: any): void;
  getChipsetData(a: any): any;
  getMyAdventurerChipData(a: any): any;
  loadOverwrite(a: any): void;
  loadOverwrite__chipset_chara(a: any): void;
}

declare class tGameCommand {
  parent: tGameMain;
  init(a: any): void;
}

declare class tGameCooking {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  initLoad(a: any): void;
  cooking(a: any, b: any, c: any): void;
  cookingMember(a: any, b: any, c: any): void;
  selectFood(a: any): void;
  selectCmr(a: any): void;
  getSuccessRate(a: any, b: any): any;
  actCooking(): void;
  cookResult(a: any, b: any): any;
  getExp(a: any, b: any, c: any): any;
  selectNum(a: any): any;
  viewOutdoor(a: any): void;
}

declare class tGameCreateCharactor {
  parent: tGameMain;
  viewData: any;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  view(a: any, b: any): void;
  changeView(a: any, b: any): void;
  viewProfile(): void;
  viewProfile2(): void;
  viewJob(): void;
  viewBonus(): void;
  viewConfirm(a: any): void;
  updateCharaData(a: any): void;
  cancelConfirm(): void;
  viewBuyWindow(a: any): void;
}

declare class tGameCreateUniqueCharactor {
  parent: tGameMain;
  init(a: any): void;
  addCharactors(): any;
  addMegamiCharactor(a: any): any;
  addShushin1Charactor(a: any): any;
  addShushin2Charactor(a: any): any;
  addYushaCharactor(a: any): any;
  addElfSisterCharactor(a: any): any;
  addElfBrotherCharactor(a: any): any;
  addKenkyujoShochoCharactor(a: any): any;
  addMagicalGirlCharactor(a: any): any;
  addMagicalGirl2Charactor(a: any): any;
  addJiiCharactor(a: any): any;
  addMikohimeCharactor(a: any): any;
  addOshitsukeCharactor(a: any): any;
}

declare class tGameCreateWindow {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  viewCreateWindowWithMember(a: any, b: any): void;
  viewCreateWindow(a: any, b: any): void;
  isCreate(a: any, b: any, c: any): any;
  viewBottomData(a: any): void;
  getSuccessRate(a: any): any;
  actCreate(): void;
  createResult(a: any, b: any): any;
  getExp(a: any, b: any, c: any): any;
}

declare class tGameCriminalRouya {
  parent: tGameMain;
  criminalRouyaMaxNum: any;
  init(a: any): void;
  changeCtype(a: any): any;
  affect(a: any, b: any): void;
  viewList(a: any, b: any): void;
  nakamani(a: any): any;
  mytownhe(a: any): any;
  boukenshahe(a: any): any;
}

declare class tGameCriminalWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewCharaMaxNum: any;
  cursor: any;
  init(a: any): void;
  initLoad(a: any): void;
  clear(): void;
  viewWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  viewInfoWindow(a: any): any;
}

declare class tGameDairyQuest {
  parent: tGameMain;
  init(a: any): void;
  tryRefresh(): any;
  refreshQuest(): void;
  createQuest(a: any, b: any): void;
  viewWindow(a: any, b: any): any;
  getWindowData(a: any, b: any): any;
  addCount(a: any, b: any): any;
}

declare class tGameData {
  parent: tGameMain;
  masterData: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  initData(a: any): any;
  getDataFlg(a: any): any;
  setDataFlg(a: any, b: any): any;
  getDataValue(a: any, b: any): any;
  setDataValue(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initFirstDatas(a: any, b: any, c: any): void;
  addPlayerGiftInfo(a: any): void;
}

declare class tGameDesignedMap {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadMapJs(a: any, b: any): void;
  addInitMaps(a: any, b: any): void;
  addTargetMap(a: any, b: any, c: any, d: any): void;
  addInitMaps_etc(a: any, b: any): any;
  getTargetChipsetPosition(a: any, b: any, c: any): any;
  autoCreateExpand(a: any, b: any, c: any, d: any): any;
}

declare class tGameDialog {
  parent: tGameMain;
  objs: any;
  initFlg: any;
  bg2CloseTimer: any;
  init(): void;
  setBg2CloseTimer(): void;
  setEvent(): void;
  isView(): any;
  view(a: any): void;
  close(): void;
  getMessageBoxFrame(): any;
}

declare class tGameDungeonGenerator {
  parent: tGameMain;
  bossFloors: any;
  init(a: any): void;
  getBaseAttr(): any;
  getAppearAttr(): any;
  convertData(a: any): any;
  createDungeonName(a: any, b: any): any;
  getDungeonNameFromDungeonData(a: any, b: any, c: any, d: any): any;
  getDungeonName(a: any, b: any, c: any, d: any, e: any): any;
  getKaidanObjectId(a: any, b: any): any;
  createEntrance(a: any, b: any): void;
  createBossFloor(a: any, b: any): any;
  setEntranceEventData(a: any, b: any): void;
  setRoad(a: any): any;
  jumpDungeonFloor(a: any, b: any, c: any, d: any, e: any, f: any): any;
  nextDungeonFloor(a: any, b: any, c: any, d: any, e: any): any;
  prevDungeonFloor(a: any, b: any, c: any, d: any, e: any): any;
  checkEmptyPosition(a: any, b: any): any;
  createFloor(a: any, b: any): any;
  isCloseRoom(a: any, b: any): any;
  createFloor_field(a: any, b: any): any;
  createFloor_maze(a: any, b: any): any;
  createFloor_long(a: any, b: any): any;
  setMonstorHouse(a: any, b: any, c: any, d: any, e: any): void;
  setRestRoom(a: any, b: any, c: any, d: any, e: any): void;
  setHogyokuRoom(a: any, b: any, c: any, d: any, e: any): void;
  setFishingRoom(a: any, b: any, c: any, d: any, e: any): void;
  setOtakaraRoom(a: any, b: any, c: any, d: any, e: any): void;
  setShopRoom(a: any, b: any, c: any, d: any): any;
  getRectSpace(a: any, b: any): any;
  getRectSpace2(a: any, b: any): any;
  getRectSpace2FreeSpace(a: any, b: any): any;
  selectItemType(a: any): any;
  getFloorItemRank(a: any): any;
  setDungeonItem(a: any, b: any, c: any, d: any): any;
  setDungeonPortalEdgeAction(a: any, b: any, c: any): any;
  setDungeonChest(a: any, b: any, c: any, d: any): any;
  setDungeonMonsterChest(a: any, b: any, c: any, d: any): any;
  setDungeonHibi(a: any, b: any, c: any, d: any): any;
  setDungeonTrap(a: any, b: any, c: any, d: any): any;
  setDungeonGoodTrap(a: any, b: any, c: any, d: any): any;
  setDungeonJumpTrap(a: any, b: any, c: any, d: any): any;
  setDungeonEnemy(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
  setDungeonMaterial(a: any, b: any, c: any, d: any): any;
  setDungeonObject(a: any, b: any, c: any): any;
  setDungeonCantMoveFloor(a: any, b: any, c: any, d: any, e: any, f: any): any;
  setDungeonCanMoveFloor(a: any, b: any, c: any, d: any, e: any, f: any): any;
  setDungeonDamageFloor(a: any, b: any, c: any, d: any, e: any): any;
  setDungeonAdventurerCharactor(a: any, b: any, c: any, d: any): any;
  setDungeonCriminalCharactor(a: any, b: any, c: any, d: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_crdungeonteleport(a: any, b: any): any;
  oneActionFinishAction_monsterhouse(a: any, b: any): any;
  oneActionFinishAction_dungeonautocdt(a: any, b: any): any;
  oneActionFinishAction_crdungeon3turn(a: any, b: any): void;
  oneActionFinishAction_yatoboss(a: any, b: any): any;
  oneActionFinishAction_crdungeon3boss(a: any, b: any): any;
  oneActionFinishAction_crdungeon7boss(a: any, b: any): any;
  oneActionFinishAction_crdungeon7boss_bosshp(a: any, b: any): any;
  oneActionFinishAction_bossgekiha(a: any, b: any): any;
  bossgekihaEvent(a: any, b: any): void;
  isEnableSetObject(a: any, b: any, c: any, d: any): any;
  isEnableSetObject2(a: any, b: any, c: any): any;
  getMapGimmickFloorInfo(a: any, b: any, c: any, d: any, e: any): any;
  getMapGimmickSpace(a: any, b: any, c: any): any;
  setDungeonTypeMap(a: any, b: any, c: any, d: any, e: any): any;
  viewInfoWindow(a: any, b: any): any;
  viewViewMapFukidashi(): void;
  createSaveFloor(a: any, b: any): any;
  createSaveJumpEscFloor(a: any, b: any): any;
  changeMap(a: any): void;
  getBassgekihaHoushu(a: any): void;
  setAutoCdt(a: any, b: any): any;
  setSpecialEvent(a: any, b: any): any;
  setDungeonEnemy_god2dungeon2(a: any, b: any, c: any, d: any, e: any, f: any): any;
  addTargetDungeon(a: any, b: any, c: any, d: any): void;
  loadDungeonJs(a: any, b: any): void;
}

declare class tGameEditMember {
  parent: tGameMain;
  hiddenCanvases: any;
  init(a: any): void;
  view(a: any): any;
  viewConfirm(a: any): void;
}

declare class tGameEffect {
  parent: tGameMain;
  effectLink: any;
  effectData: any;
  canvases: any;
  effectTextPositionHistories: any;
  aY: any;
  init(a: any): void;
  initLoad(a: any): void;
  addEffect(a: any): any;
  frameActionDraw(a: any): void;
  draw(a: any): any;
  drawEffectMap(a: any, b: any, c: any): any;
  effectSimple(a: any, b: any): any;
  effectBottomText(a: any, b: any): any;
  getEffectTextDelay(a: any): any;
  effectText(a: any, b: any): any;
  effectSmallText(a: any, b: any): any;
  viewMapName(a: any, b: any): any;
  clear(): void;
  effectDeath(a: any, b: any): any;
  effectVanish(a: any, b: any): any;
  effectUpObject(a: any, b: any): any;
  effectSimpleCut(a: any): any;
  effectLine(a: any, b: any): any;
  viewBigText(a: any, b: any): any;
}

declare class tGameEmotionResource {
  parent: tGameMain;
  emotionLink: any;
  init(a: any): void;
  initLoad(a: any): void;
  getEmotionData(a: any): any;
}

declare class tGameEnchantment {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  fromEquipment(a: any, b: any, c: any, d: any): void;
  fromMaterial(a: any, b: any, c: any, d: any): void;
  fromEquipmentMember(a: any, b: any, c: any, d: any): void;
  fromMaterialMember(a: any, b: any, c: any, d: any): void;
  getCanEnchantmentNum(a: any): any;
  getUsedEnchantmentNum(a: any): any;
  isCanEnchantmentPair(a: any, b: any): any;
  getPrice(a: any, b: any, c: any, d: any): any;
  selectEquipment(a: any, b: any): void;
  selectMaterial(a: any, b: any): void;
  getItemIndex(a: any, b: any): any;
  getSuccessRate(a: any, b: any): any;
  actEnchantment(): void;
  requestEnchantment(): void;
  enchantmentResult(a: any, b: any): any;
  getExp(a: any, b: any, c: any): any;
  rmvEquipment(a: any, b: any): void;
}

declare class tGameEnsei {
  parent: tGameMain;
  nextUpdateTime: any;
  bokenshaMaxLevel: any;
  init(a: any): void;
  updateKouho(): any;
  convertItem(a: any): any;
  viewWindow(a: any): void;
  createEnseiField(a: any, b: any): void;
  createKyoten(a: any, b: any): any;
  createBoukensha(a: any, b: any, c: any): void;
  createDungeon(a: any, b: any, c: any): any;
  deleteEnseiData(): any;
  backToHome(a: any): void;
  enseiExit(a: any): any;
}

declare class tGameEquipRankup {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  getAddRank(): any;
  getMaxRank(a: any): any;
  getRankupRequireMaterials(a: any): any;
  fromEquipment(a: any, b: any, c: any, d: any): void;
  fromEquipmentMember(a: any, b: any, c: any, d: any): void;
  getCanEquipRankup(a: any): any;
  selectEquipment(a: any, b: any): void;
  getItemIndex(a: any, b: any): any;
  getSuccessRate(a: any): any;
  actEquipRankup(): void;
  equiprankupResult(a: any, b: any): any;
  getExp(a: any, b: any, c: any): any;
  viewBottomData(a: any): any;
  isCreate(a: any, b: any, c: any): any;
}

declare class tGameEquipmentWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  labelFontSize: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  equipTypes: any;
  init(a: any): void;
  viewEquipmentWindow(a: any, b: any): any;
  drawObject(): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  viewEquipmentWindowContinue(): void;
  selectItem(): void;
  viewEquipHikaku(a: any, b: any): any;
}

declare class tGameEtc {
  parent: tGameMain;
  linkData: any;
  data: any;
  images: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initLoad(a: any): void;
  loadAllImage(a: any): void;
  loadImage(a: any, b: any): void;
}

declare class tGameEtcTown {
  parent: tGameMain;
  init(a: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
}

declare class tGameEvent {
  parent: tGameMain;
  eventDatas: any;
  init(a: any): void;
  loadEvent(a: any, b: any): any;
  eventAffectCharactor(a: any, b: any, c: any): void;
  checkChangeMapEvent(): void;
  changeMapEvent(a: any, b: any): void;
  addAffectNonBattleAnswers(a: any): void;
  addAffectNonBattleAnswers_kenkyu(a: any): void;
  addAffectNonBattleAnswers_magicalgirl(a: any): void;
  knockDown(a: any, b: any, c: any): void;
  viewMap(a: any): void;
  dropItem(a: any): void;
  oneActionFinishAction(a: any, b: any, c: any): void;
  revivalEventCharas(a: any): any;
}

declare class tGameEventAnimation {
  parent: tGameMain;
  animationData: any;
  moveSpeed: any;
  init(a: any): void;
  animation(a: any, b: any): void;
  convertAnimationData_chara(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  convertRouteToMove(a: any): any;
}

declare class tGameEventFrame {
  parent: tGameMain;
  hiddenCanvases: any;
  viewData: any;
  init(a: any): void;
  view(a: any, b: any): any;
  addCharactor(a: any): any;
  removeCharactor(a: any): any;
  destory(a: any): void;
  viewMap(a: any, b: any): void;
  backMap(a: any, b: any, c: any): void;
  backGotoMap(a: any, b: any): void;
  backMapAct(a: any): void;
  backGotoMapAct(a: any): void;
  viewOutAnimation(a: any, b: any): void;
  viewInAnimation(a: any, b: any): void;
}

declare class tGameExMapData {
  parent: tGameMain;
  version: any;
  importData: any;
  init(a: any): void;
  exportMapData(a: any, b: any): void;
  createOutputMapData(a: any, b: any, c: any): any;
  importMapData(a: any, b: any): void;
  clearImportMapDataFile(a: any): void;
  selectedImportMapDataFile(a: any): any;
  selectedImportMapDataFileCommon(a: any, b: any, c: any, d: any): void;
  exportK1up(a: any, b: any): void;
}

declare class tGameFaceResource {
  parent: tGameMain;
  size: any;
  faceLink: any;
  faceData: any;
  init(a: any): void;
  getSomeFace(a: any): any;
  getFace(a: any): any;
  getChipsetFace(a: any): any;
  loadImage(a: any, b: any, c: any): void;
  loadAllImage(a: any): void;
  loadLinkJson(a: any): void;
  getRandomCharactor(a: any, b: any, c: any, d: any, e: any, f: any): any;
  getRandomObjectId(a: any): any;
  getRandomFaceId(a: any): any;
  loadOverwrite(a: any): void;
  loadOverwrite__face(a: any): void;
}

declare class tGameFaith {
  parent: tGameMain;
  init(a: any): void;
  addTownFaith(a: any): any;
  getRivalCharas(): any;
  getBossChara(a: any): any;
  maoushutsugen(a: any, b: any): void;
  updateMaouAction(): void;
  updateMaouTimeOver(a: any, b: any): void;
  updateRivalAction(): void;
  updateTownsConnect(a: any): void;
  isHendo(): any;
  createFaithLowDungeon(): any;
  createStartFloor(a: any, b: any): any;
  createHaikaiFloor(a: any, b: any): any;
  createSuiminFloor(a: any, b: any): any;
  setRandomHone(a: any, b: any): void;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_faithlowhaikaichikai(a: any, b: any): void;
  viewShuki(a: any, b: any): void;
  createOtasuke(a: any, b: any, c: any): any;
  createBossFloor(a: any, b: any): any;
  bossEvent(a: any): void;
  oneActionFinishAction_faithlowbossgekiha(a: any, b: any): any;
  removeHone(): void;
  clearTargetFaith(a: any, b: any): any;
  shukka(a: any): void;
  viewFaithHoshu(a: any, b: any): void;
}

declare class tGameFaithWindow {
  parent: tGameMain;
  textMaxWidth: any;
  fontSize: any;
  textSpace: any;
  ccvs: any;
  cctx: any;
  init(a: any): void;
  clearCanvas(): void;
  view(a: any, b: any): any;
}

declare class tGameFarm {
  parent: tGameMain;
  farmData: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadFarm(a: any): void;
  createObject(a: any): any;
  checkGrow(a: any): any;
  getExp(a: any, b: any, c: any): any;
  updateWaterAll(a: any): any;
  updateFarmObjects(a: any, b: any): void;
  isWaterWeather(a: any): any;
}

declare class tGameFieldGenerator {
  parent: tGameMain;
  csize: any;
  fieldEventData: any;
  init(a: any): void;
  createMainField(a: any, b: any): void;
  createFieldWithLoad(a: any, b: any): void;
  dungeonAreasIndex(a: any, b: any): any;
  createField(a: any, b: any): void;
  setSpreadChipset(a: any, b: any, c: any, d: any, e: any, f: any): void;
  setRandomSpreadChipset(a: any): any;
  getDungeonAreas(a: any): any;
  getRandomTownPositions(a: any): any;
  getRandomFreePositions(a: any): any;
  inTown(a: any, b: any, c: any): any;
  inSlum(a: any, b: any, c: any): any;
  inMyTown(a: any, b: any, c: any): any;
  inSubTown(a: any, b: any, c: any): any;
  inNouchi(a: any, b: any, c: any): any;
  inIkesu(a: any, b: any, c: any): any;
  inSchool(a: any, b: any, c: any): any;
  inCastle(a: any, b: any, c: any): any;
  inEtcTown(a: any, b: any, c: any): any;
  inDungeon(a: any, b: any, c: any, d: any): any;
  inDungeonFloor1(a: any, b: any, c: any, d: any): any;
  inMaterial(a: any, b: any, c: any): void;
  updateAllField(): void;
  autoCreateTown(a: any, b: any, c: any, d: any): void;
  autoCreateSchool(a: any, b: any, c: any, d: any): void;
  autoCreateCastle(a: any, b: any, c: any, d: any): void;
  autoCreateSlum(a: any, b: any, c: any, d: any): void;
  autoCreateDungeon(a: any, b: any): void;
  getRandomDungeonType(a: any): any;
  createDungeon(a: any): any;
  inQuest1(a: any, b: any, c: any): any;
  inQuest9(a: any, b: any, c: any): any;
  inQuest10(a: any, b: any, c: any): any;
  inQuest12(a: any, b: any, c: any): any;
  searchTargetObject(a: any, b: any): any;
  initFieldEvent(a: any): void;
  checkMoveEvent(a: any): any;
  checkTalkBossArea(a: any): any;
  checkMoveEventForce(a: any): any;
  getPlayerPositionChipsetInfo(): any;
  getTargetPositionOnemapId(a: any, b: any): any;
  getPlayerPositionOnemapId(): any;
  emenyEncount(a: any): any;
  questEnemyEncount(a: any, b: any): any;
  peddlerEncount(a: any): any;
  slavetraderEncount(a: any): any;
  rescueEncount(a: any): any;
  escortEncount(a: any): any;
  restEncount(a: any, b: any, c: any, d: any): any;
  kanteiEncount(a: any): any;
  seishokushaEncount(a: any): any;
  viewFieldMapAction(a: any): void;
  choiseRescueCharactor(): any;
  choiseEscortCharactor(): any;
  clearEncountData(a: any): any;
  criminalEncount(a: any, b: any): any;
  viewMapCustomMenu(a: any): any;
  refreshDungeons(a: any): any;
  refreshDungeons2(a: any, b: any): any;
  refreshTowns(a: any): any;
  refreshSchools(a: any): any;
  refreshCastles(a: any): any;
  refreshSlums(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_checkfaithlow(a: any, b: any): any;
  oneActionFinishAction_faithlowdungeonfirst(a: any, b: any): void;
  oneActionFinishAction_maoushutsugen(a: any, b: any): any;
  oneActionFinishAction_bossareabossgekiha(a: any, b: any): any;
  oneActionFinishAction_bossareaenemygekiha(a: any, b: any): any;
  oneActionFinishAction_osoudeath(a: any, b: any): any;
  isMaouArea(a: any, b: any): any;
  inMaou(a: any, b: any, c: any, d: any): any;
  getTargetMap(a: any): any;
  inTargetMap(a: any, b: any): any;
  getMapName(a: any, b: any): any;
  setMaouTeshitaShutugen(a: any, b: any, c: any): void;
  createBuilding(a: any, b: any, c: any): void;
  expandMap(a: any, b: any): any;
  createFirstMap(a: any): void;
  getRangeMap(a: any): any;
  getKakuchoFame(a: any): any;
  viewFieldHenkaWindow(a: any): void;
  shokinkubidaEncount(a: any): any;
  getFieldHenkaBottomData(): any;
  createKodaiiseki(a: any, b: any): any;
  updateBossArea(a: any): any;
  bossAreaEncount(a: any): any;
  bossAreaEncount_boss(a: any, b: any, c: any, d: any): any;
  bossAreaEncount_enemy(a: any, b: any, c: any, d: any): any;
  viewBossareaBoard(a: any, b: any): any;
  refreshFaith(a: any): any;
  shukeiFaith(a: any, b: any, c: any): any;
  addMapTarget(a: any, b: any): any;
  removeMapTarget(a: any, b: any): any;
  clearConditionViewField(a: any): any;
  setKojiki(a: any): void;
  setOsouDeathAction(a: any): void;
  fieldCreateRoad(a: any): any;
  fixInEtcTown_hogyokuketsugo(a: any): void;
}

declare class tGameFieldMaterial {
  parent: tGameMain;
  init(a: any): void;
  autoCreate(a: any): void;
  getName(a: any, b: any): any;
  createSpot(a: any, b: any): any;
  convertData(a: any): any;
  createSaikutsujo(a: any, b: any): any;
  createSaishujo(a: any, b: any): any;
  createHoujou(a: any, b: any): any;
  isEnableSetObject(a: any, b: any, c: any): any;
  getFreeSpace(a: any): any;
  inMaterial(a: any, b: any, c: any): any;
  changeMap(a: any): void;
}

declare class tGameFishing {
  parent: tGameMain;
  data: any;
  img: any;
  viewData: any;
  size: any;
  skillId: any;
  init(a: any): void;
  getSp(a: any, b: any): any;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  view(a: any): any;
  setFishData(): void;
  clear(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  addTime(a: any): void;
  getExp(a: any, b: any, c: any): any;
}

declare class tGameFukidashiResource {
  parent: tGameMain;
  fukidashiLink: any;
  cvs: any;
  ctx: any;
  init(a: any): void;
  initLoad(a: any): void;
  createFukidashi(a: any): any;
}

declare class tGameFullscreenLog {
  parent: tGameMain;
  callBack: any;
  init(a: any): void;
  view(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawCanvas(): any;
}

declare class tGameGameClear {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  checkClearFlg(): void;
  checkFirst(): void;
  setClearDungeon(): any;
  setClearEtc(): any;
}

declare class tGameGameOptionWindow {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  viewOptionWindow(a: any, b: any): void;
}

declare class tGameGameOver {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  setLastInTown(a: any): any;
  view(): void;
  setPenalty(): void;
  revival(): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  gameClose(): void;
}

declare class tGameGamePad {
  parent: tGameMain;
  isEnableGamePad: any;
  targetGamePadIndex: any;
  isSteamInput: any;
  steamInputPressedButtons: any;
  keymapData: any;
  pressedButtons: any;
  isBlock: any;
  init(): void;
  frameAction(a: any): void;
  calKey(): void;
  loadKeyMap(a: any): void;
  clearPressKeys(): void;
  isPressedButton(a: any): any;
  setBlock(a: any): void;
  refreshKeyMap(): any;
  setSteamInput(a: any): void;
}

declare class tGameGamePadBase {
  parent: tGameMain;
  isEnableGamePad: any;
  targetGamePadIndex: any;
  pressedButtons: any;
  simplePressKeys: any;
  pressKeyLimitTime: any;
  pressKeyClickTime: any;
  pressKeyDoubleClickTime: any;
  pressKeyPressTime: any;
  longPressKeyPressTime: any;
  pressKeys: any;
  isBlock: any;
  init(): void;
  frameAction(a: any): void;
  calKey(): void;
  sendKeyDown(a: any): void;
  sendKeyUp(a: any): void;
  clearPressKeys(): void;
  isDown(a: any): any;
  isDoubleDown(a: any): any;
  isClick(a: any): any;
  isDoubleClick(a: any): any;
  isPress(a: any): any;
  isDoublePress(a: any): any;
  isLongPress(a: any): any;
  setBlock(a: any): void;
}

declare class tGameGamePadEditor {
  parent: tGameMain;
  objs: any;
  isInit: any;
  viewData: any;
  gamepadSvgSize: any;
  buttons: any;
  l2r2Data: any;
  init(): void;
  initFrame(a: any): void;
  viewKeyEditWindow(a: any): void;
  viewPressButtonWindow(a: any): void;
}

declare class tGameGod {
  parent: tGameMain;
  init(a: any): void;
  viewMapWarikomi(a: any): void;
  getCastleEventData(a: any): any;
  viewMapWarikomiAction(a: any, b: any, c: any): void;
  viewMapWarikomiAction_godtoujou(a: any, b: any): void;
  viewMapWarikomiAction_godcastle1(a: any, b: any): void;
  viewMapWarikomiAction_godcastle2(a: any, b: any): void;
  viewMapWarikomiAction_godfaith1(a: any, b: any): void;
  viewMapWarikomiAction_godmonderu(a: any, b: any): void;
  viewMapWarikomiAction_monderu2(a: any, b: any): void;
  viewMapWarikomiAction_clear3towers(a: any, b: any): void;
  viewMapWarikomiAction_megamigekihafield(a: any, b: any): void;
  viewMapWarikomiAction_god2_tojo(a: any, b: any): void;
  viewMapWarikomiAction_god2_junbiok(a: any, b: any): void;
  viewMapWarikomiAction_god2_lasthe(a: any, b: any): void;
  checkOverwriteBossFloor(a: any, b: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  talkDungeonBoss(a: any, b: any, c: any): any;
  viewMap(a: any): void;
  oneActionFinishAction_nuebattlechecktimeout(a: any, b: any): any;
  autoCreateExpand(a: any, b: any, c: any, d: any): void;
  getDungeonRandomPos(a: any): any;
}

declare class tGameGoodTrap {
  parent: tGameMain;
  init(a: any): void;
  convertData(a: any): any;
  getTrapToObject(a: any, b: any): any;
  getTrapObjectId(a: any): any;
  getTrapName(a: any): any;
  oneActionTrap(a: any): any;
  affect(a: any): any;
  runTrap(a: any, b: any): any;
  tryBreak(a: any): void;
}

declare class tGameGuide {
  parent: tGameMain;
  init(a: any): void;
  checkChangeMapGuideEvent(): void;
  checkMoveGuideEvent(a: any): any;
  checkAffectObjectGuideEvent(a: any, b: any): any;
  checkElfdungeonJoinEvent(a: any, b: any): any;
  checkMagicalGirlAuEvent(a: any, b: any): any;
  changeMapEvent(a: any, b: any): void;
  gameStartEvent(a: any, b: any): any;
  checkMaouShutsugenEvent(a: any, b: any): any;
}

declare class tGameHelp {
  parent: tGameMain;
  data: any;
  itemlink: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  hcvs: any;
  hctx: any;
  iframe: any;
  iframeOver: any;
  hpcvs: any;
  hpctx: any;
  fontSize: any;
  textSpace: any;
  viewDocumentData: any;
  viewItemMaxNum: any;
  cursor: any;
  init(a: any): void;
  initLoad(a: any): void;
  viewHelp(a: any): void;
  viewCategoryWindow(a: any, b: any): void;
  viewCategoryItemWindow(a: any, b: any, c: any): void;
  viewSelectWindow(a: any, b: any, c: any, d: any): any;
  getCategories(): any;
  getCategoryItems(a: any): any;
  viewDocument(a: any, b: any): any;
  setMessage(): void;
  convertButtonLabel(): void;
}

declare class tGameHikitsugi {
  parent: tGameMain;
  version: any;
  init(a: any): void;
  getHikitsugiData(a: any): any;
  setHikitsugiData(a: any): any;
  getStorage(): any;
  getSozaifukuro(): any;
  getShokuzaifukuro(): any;
  getRyourifukuro(): any;
  getActionSkills(a: any, b: any): any;
  getSkills(a: any): any;
  getGift(): any;
  getRecipe(): any;
  getMapEditor(): any;
  getItemRecord(): any;
  getMamonoRecord(): any;
  setWindow(a: any): void;
  save(a: any, b: any): void;
  load(a: any): void;
}

declare class tGameHikitsugiNakama {
  parent: tGameMain;
  max: any;
  version: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  initData(): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  save(a: any): void;
  load(a: any): void;
  getLocalStorageData(a: any): void;
  setWindow(a: any): void;
  view(a: any): void;
  convertChara2Data(a: any): any;
  viewYobidasu(a: any): void;
  getItemDescription(a: any, b: any): any;
}

declare class tGameHikyo {
  parent: tGameMain;
  init(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  setHikyoDummyObjects(a: any): any;
  setHikyoDummyObjects_act(a: any, b: any): any;
  hakken(a: any, b: any): any;
  matakita(a: any, b: any): void;
  drawHikyo(a: any, b: any): any;
}

declare class tGameHoridashimono {
  parent: tGameMain;
  nextUpdateTime: any;
  init(a: any): void;
  view(a: any): void;
  tryRefresh(a: any): any;
  createItem(): any;
}

declare class tGameHyk {
  parent: tGameMain;
  targetFont: any;
  textMode: any;
  timeViewMode: any;
  cnvData: any;
  logoFileName: any;
  textLengthMode: any;
  list: any;
  init(a: any): void;
  initLoad(a: any, b: any): any;
  loadLinkJson(a: any): void;
  loadLOADDATA(a: any, b: any): void;
  getTableStrings(a: any, b: any): void;
  getTableString__default(a: any, b: any, c: any): void;
  getTableString__talk(a: any, b: any, c: any): void;
  getTableString__talkevent(a: any, b: any, c: any): void;
  getTableString__askill(a: any, b: any, c: any): void;
  getTableString__charactor(a: any, b: any, c: any): void;
  getTableString__kucho(a: any, b: any, c: any): void;
  getTableString__item(a: any, b: any, c: any): void;
  getTableString__job(a: any, b: any, c: any): void;
  getTableString__map(a: any, b: any, c: any): void;
  getTableString__mapeditor(a: any, b: any, c: any): void;
  getTableString__name(a: any, b: any, c: any): void;
  getTableString__poker(a: any, b: any, c: any): void;
  getTableString__shortevent(a: any, b: any, c: any): void;
  getTableString__skill(a: any, b: any, c: any): void;
  getTableString__war(a: any, b: any, c: any): void;
  getTableString__help(a: any, b: any, c: any): void;
  addExCsvs(a: any, b: any): void;
  importLanguageCsv(a: any): any;
  reflectLanguageLOADDATA(a: any, b: any): any;
  createMonsterList(): void;
}

declare class tGameIcon24Resource {
  parent: tGameMain;
  iconData: any;
  init(a: any): void;
  initLoad(a: any): void;
  getIconData(a: any): any;
}

declare class tGameIconResource {
  parent: tGameMain;
  iconData: any;
  init(a: any): void;
  loadIcon(a: any): void;
  getIconData(a: any): any;
}

declare class tGameIdRecycle {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  checkObject(a: any): any;
  getObjectId(): any;
}

declare class tGameIkesu {
  parent: tGameMain;
  data: any;
  maxNum: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  getIkesuName(): any;
  getChipData(a: any): any;
  setIkesu(a: any, b: any): any;
  createIkesuWithLoad(a: any, b: any): void;
  moveIkesu(a: any): any;
  createIkesu(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewWindow(a: any): void;
  viewDefault(a: any, b: any): void;
  ireru(a: any): void;
  dasu(a: any): void;
  addItem(a: any, b: any): any;
  sortItems(): void;
  convertItem(a: any): any;
  seicho(): void;
  getAddNumRate(a: any): any;
}

declare class tGameItem {
  parent: tGameMain;
  masterData: any;
  egoMaxLength: any;
  rankItems: any;
  rankShopItems: any;
  rankEquips: any;
  rankShopEquips: any;
  rankCharactorEquips: any;
  rankChestEquips: any;
  rareRandomRates: any;
  spaceFraction: any;
  juryokaMax: any;
  itemNameMax: any;
  equipAbilities: any;
  atkIdxs: any;
  equipAbilityIds: any;
  equipMaxRank: any;
  init(a: any): void;
  initLoad(a: any): void;
  setItemCharacteristic(): any;
  getItemCharactorUse(a: any): any;
  getItemCharacteristic(a: any): any;
  getItemMapType(a: any): any;
  getItemWatasu(a: any): any;
  getItemOshitsukeru(a: any, b: any, c: any): any;
  getItemHikitsugi(a: any): any;
  getItemRare(a: any): any;
  getSimpleItemName(a: any): any;
  getItemName(a: any, b: any, c: any, d: any): any;
  getEnableGroupItem(a: any): any;
  getItemRank(a: any): any;
  getItemSpaceMaster(a: any): any;
  getItemPriceMaster(a: any, b: any): any;
  getItemPrice(a: any, b: any, c: any, d: any, e: any): any;
  getItemSpace(a: any): any;
  getItemDescriptionSub(a: any): any;
  getItemDescription(a: any): any;
  getItemData(a: any): any;
  convertData(a: any): any;
  convertDataFix(a: any): void;
  getFixCloneItem(a: any): any;
  getMoneyItem(a: any, b: any): any;
  getItemToObject(a: any, b: any): any;
  affect(a: any): any;
  getEnableEquipCalData(a: any): any;
  getEnableEquipItems(a: any, b: any, c: any): any;
  checkCompileItem(a: any, b: any): any;
  getItemSkill(a: any, b: any, c: any): any;
  getItemSkill_1(a: any, b: any, c: any): any;
  getItemSkill_2(a: any, b: any, c: any): any;
  getItemSkill_3(a: any, b: any, c: any): any;
  getItemSkill_5(a: any, b: any, c: any): any;
  getItemSkill_6(a: any, b: any, c: any): any;
  getItemSkill_9(a: any, b: any, c: any): any;
  getItemSkill_14(a: any, b: any, c: any): any;
  getItemSkill_17(a: any, b: any, c: any): any;
  getItemSkill_19(a: any, b: any, c: any): any;
  getItemSkill_21(a: any, b: any, c: any): any;
  getItemSkill_22(a: any, b: any, c: any): any;
  getRandomShikibetsu(a: any): any;
  createRandomItem(a: any): any;
  createRandomEquipment(a: any): any;
  createRandomChestItem(a: any): any;
  createRandomChestEquipment(a: any): any;
  createMeetItem(a: any): any;
  createRandomFoodItem(a: any): any;
  createItem(a: any): any;
  convertRankEquipment(a: any, b: any, c: any, d: any): void;
  setEquipmentAccessoryData(a: any, b: any, c: any): void;
  updateEquipmentName(a: any): any;
  updateEquipmentTargetName(a: any, b: any): any;
  getEnchantmentedItem(a: any): any;
  getEnchantmentValues(a: any, b: any): any;
  getEquipSkillValues(a: any, b: any): any;
  getEnchantmentTypeIndex(a: any): any;
  getEnableEnchantmentList(a: any, b: any): any;
  getEnableEquipSkillList(a: any, b: any): any;
  setEquipmentQualityEnchantment(a: any, b: any, c: any, d: any): any;
  setEquipmentQualitySkill(a: any, b: any): any;
  setEquipmentCounterAskill(a: any, b: any, c: any): void;
  createEquipment(a: any): any;
  useSpecialItem(a: any, b: any, c: any, d: any): any;
  noroitaiseiPlusItem(a: any, b: any, c: any, d: any): any;
  noroitaiseiMinusItem(a: any, b: any, c: any, d: any): any;
  jakukataiseiPlusItem(a: any, b: any, c: any, d: any): any;
  jakukataiseiMinusItem(a: any, b: any, c: any, d: any): any;
  equipmentPlus(a: any, b: any, c: any, d: any): any;
  equipmentMinus(a: any, b: any, c: any, d: any, e: any, f: any): any;
  kanteiItem(a: any, b: any, c: any, d: any, e: any): any;
  mikanteiItem(a: any, b: any): any;
  noroikeshiItem(a: any, b: any, c: any, d: any, e: any): any;
  noroiItem(a: any, b: any, c: any, d: any, e: any, f: any): any;
  getItemTextColorCode(a: any): any;
  getItemUseMessage(a: any): any;
  usedFootItem(a: any): any;
  removeFootItem(a: any, b: any): any;
  getEquipAbilitiesData(a: any): any;
  setRankItems(): any;
  createEquipmentQuality(): any;
  createShopEquipmentQuality(): any;
  selectItemType(a: any): any;
  getEquipItemMaster(a: any, b: any): any;
  getEquipmentEnchantmentPriceValues(a: any): any;
  getEquipmentSkillPriceValues(a: any): any;
  getEquipmentCounterAskillPriceValues(a: any): any;
  getEquipmentKyushuPriceValues(a: any): any;
  sortItem(a: any): void;
  createCharactorEquipmentItem(a: any): any;
  createCharactorEquipmentSpecialItem(a: any): any;
  getEquipmentPerformanceValue(a: any): any;
  createMaterialItems(a: any): any;
  getFootItemMessage(a: any): any;
  getItemNamesMessage(a: any): any;
  setRareRandomRates(): void;
  getRareRandomRateItem(): any;
  convertTargetRankEquipment(a: any, b: any): any;
  equipRankupItem(a: any, b: any, c: any, d: any): any;
  askillLevelupItem(a: any, b: any, c: any, d: any): any;
  equipmentRename(a: any, b: any): void;
  equipmentChangeChip(a: any, b: any): void;
  askillRename(a: any, b: any): void;
  askillRename_act(a: any, b: any, c: any): void;
  jobRename(a: any, b: any): void;
  zentaishiji(a: any, b: any): void;
  getEquipmentDiff(a: any, b: any): any;
  getCharaItemAskillRank(a: any, b: any): any;
  getKodaiisekiItem(a: any): any;
  equipmentKeiryoka(a: any, b: any, c: any, d: any): any;
  equipmentJuryoka(a: any, b: any, c: any, d: any): any;
  getHoseiLevel(a: any, b: any): any;
  getWeaponMainZokusei(a: any): any;
  createLockID(): any;
  setLock(a: any, b: any): void;
  clearLock(a: any, b: any): void;
  isLock(a: any, b: any): any;
  getLockId(a: any): any;
  setLockId(a: any): any;
  isEquipmentItem(a: any): any;
  getItemSkill_checkReuseItem(a: any): any;
  actEquipPlus(a: any, b: any): any;
}

declare class tGameItemInfoWindow {
  parent: tGameMain;
  cvs: any;
  ctx: any;
  fontSize: any;
  init(a: any): void;
  viewInfoWindow(a: any): any;
}

declare class tGameItemWindow {
  parent: tGameMain;
  textMaxWidth: any;
  textMaxWidth2: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  clearBottomData: any;
  init(a: any): void;
  clear(): void;
  updateBottomData(a: any): void;
  getCharactorBottomData(a: any, b: any): any;
  getStorageBottomData(a: any): any;
  getMyShopBottomData(a: any): any;
  getMoneyIcon(a: any): any;
  viewItemWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  updateItems(a: any): void;
  viewBottomWindow(a: any, b: any): any;
  getItemShortCuts(): void;
}

declare class tGameJashin {
  parent: tGameMain;
  init(a: any): void;
  createEventDungeon(): any;
  viewAdventureGuildBoard(a: any, b: any): any;
  viewAdventureGuildBoard2(a: any, b: any): void;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_jashinboss(a: any, b: any): any;
  oneActionFinishAction_jashinboss2(a: any, b: any): any;
  createBossFloor(a: any): void;
  affectZou(a: any, b: any): any;
}

declare class tGameJinja {
  parent: tGameMain;
  init(a: any): void;
  affectSaisenbako(a: any, b: any): any;
  kau(a: any, b: any): void;
  kau2(a: any, b: any): void;
}

declare class tGameJob {
  parent: tGameMain;
  jobData: any;
  groups: any;
  jobNameMax: any;
  init(a: any): void;
  loadJob(a: any): void;
  initLoad(a: any): void;
  getJobName(a: any, b: any): any;
  getCharactorJobName(a: any, b: any, c: any): any;
  getJobChangeTargets(a: any): any;
  initGroups(): void;
  getRandomJob(a: any): any;
}

declare class tGameJobChange {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  view(a: any, b: any): void;
  viewOne(a: any, b: any, c: any, d: any): void;
  enableJobChange(a: any): any;
}

declare class tGameK1up {
  parent: tGameMain;
  hcvs: any;
  hctx: any;
  uploadMyTownData: any;
  listMyTownData: any;
  uploadMyAdventurerCharactorData: any;
  listMyAdventurerCharactorData: any;
  importFaceData: any;
  uploadFaceData: any;
  listFaceData: any;
  importItemData: any;
  uploadItemData: any;
  listItemData: any;
  importChipsetData: any;
  uploadChipsetData: any;
  listChipsetData: any;
  importTalkData: any;
  uploadTalkData: any;
  listTalkData: any;
  manualData: any;
  tags: any;
  scrollEventData: any;
  apiUrl: any;
  key: any;
  init(a: any): void;
  getApiUrl(): any;
  setText(a: any, b: any): void;
  setErrorView(a: any): void;
  viewUploadMyTown(a: any, b: any): any;
  viewListMyTown(a: any, b: any): any;
  viewUploadFace(a: any, b: any): any;
  viewListFace(a: any, b: any): any;
  viewUploadItem(a: any, b: any): any;
  viewListItem(a: any, b: any): any;
  viewUploadChipset(a: any, b: any): any;
  viewListChipset(a: any, b: any): any;
  viewUploadTalk(a: any, b: any): any;
  viewListTalk(a: any, b: any): any;
  viewImportFace(a: any, b: any): any;
  viewImportItem(a: any, b: any): any;
  viewImportChipset(a: any, b: any): any;
  viewImportTalk(a: any, b: any): any;
  viewTitleMenu(a: any): void;
  viewUploadMyAdventurerCharactor(a: any, b: any): any;
  viewUploadMyAdventurerCharactor2(a: any, b: any): any;
  viewListMyAdventurerCharactor(a: any, b: any): any;
  initScrollEvent(a: any): void;
  setScrollEvent(a: any): void;
  isMove(a: any, b: any): any;
  viewManualFace(a: any, b: any): any;
  viewManualItem(a: any, b: any): any;
  viewManualChipset1(a: any, b: any): any;
  viewManualChipset2(a: any, b: any): any;
  viewManualTalk(a: any, b: any): any;
  getOverwriteItemList(): any;
  refreshOverwriteItem(a: any, b: any): any;
  initSearchBox(a: any): void;
  initTagInsert(a: any): void;
  initTagEdit(a: any): void;
  updateDetailTagEdit(a: any): void;
  getInsertTags(a: any): any;
  updateSearchForm(a: any): void;
  changeSearchTag(a: any): void;
  loadTags(a: any): any;
}

declare class tGameKeyboard {
  parent: tGameMain;
  simplePressKeys: any;
  forcePressKeys: any;
  pressKeyLimitTime: any;
  pressKeyClickTime: any;
  pressKeyDoubleClickTime: any;
  pressKeyPressTime: any;
  longPressKeyPressTime: any;
  pressKeys: any;
  pressNaturalKeys: any;
  keymapData: any;
  keymapDataDefault: any;
  isPreventDefault: any;
  isEnableBlock: any;
  init(): void;
  loadKeyMap(a: any): void;
  initEvent(a: any): void;
  calKey(): void;
  frameAction(a: any): void;
  isForceDown(a: any): any;
  isDown(a: any): any;
  isDoubleDown(a: any): any;
  isClick(a: any): any;
  isDoubleClick(a: any): any;
  isPress(a: any): any;
  isDoublePress(a: any): any;
  isLongPress(a: any): any;
  isWordClick(a: any): any;
  clearPressKeys(): void;
  getDownKeys(): any;
  setEnablePreventDefault(): void;
  setDisablePreventDefault(): void;
  sendKeyDown(a: any): void;
  sendKeyUp(a: any): void;
}

declare class tGameLakeZou {
  parent: tGameMain;
  init(a: any): void;
  view(a: any, b: any): void;
  act(a: any): any;
}

declare class tGameLoading {
  parent: tGameMain;
  targets: any;
  objs: any;
  init(a: any): void;
  addLoading(a: any): any;
  removeLoading(a: any): any;
  viewLoadingError(a: any, b: any, c: any): any;
  getErrorNum(): any;
  viewLoading(): void;
  hiddenLoading(): void;
  viewLoadingErrorFrame(): void;
  hiddenLoadingErrorFrame(): void;
  retry(): void;
}

declare class tGameLoading2 {
  parent: tGameMain;
  targets: any;
  errorHeightMin: any;
  init(): void;
  initObjs(a: any): any;
  searchTarget(a: any): any;
  view(a: any, b: any, c: any, d: any): any;
  hidden(a: any): void;
}

declare class tGameLog {
  parent: tGameMain;
  logs: any;
  logMaxNum: any;
  textMaxWidth: any;
  fontSize: any;
  lineHeight: any;
  cvs: any;
  ctx: any;
  tcvs: any;
  tctx: any;
  lastRect: any;
  isRequireRefresh: any;
  init(a: any): void;
  addAndViewLog(a: any, b: any): void;
  addLog(a: any, b: any): void;
  clearLog(): void;
  drawLog(): any;
  viewLog(): any;
  viewOverlookLog(a: any): any;
  drawOverlookLog(a: any): any;
  frameActionDraw(a: any): any;
}

declare class tGameMagicalGirl {
  parent: tGameMain;
  init(a: any): void;
  isWarikomi(a: any, b: any): any;
  actWarikomi(a: any, b: any): void;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_magicalgirlgekiha(a: any, b: any): any;
  okoru(a: any): any;
  viewMap(a: any): void;
  getMoriPositions(): any;
}

declare class tGameMaigo {
  parent: tGameMain;
  init(a: any): void;
  tryCreate(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_maigofirst(a: any, b: any): any;
  oneActionFinishAction_maigoevent1(a: any, b: any): void;
  oneActionFinishAction_maigoevent2(a: any, b: any): void;
  oneActionFinishAction_maigobossgekiha(a: any, b: any): any;
  viewMap(a: any): void;
  deleteMaigoCharactor(): any;
  affectAnswer(a: any): void;
  calBasho(): any;
  affectObject(a: any): any;
  inTargetMap(a: any, b: any, c: any): any;
  createTargetMap(a: any, b: any): any;
  errorFix(a: any, b: any): any;
  setTargetEvent1(a: any, b: any): any;
  setTargetEvent2(a: any, b: any): any;
}

declare class tGameMain {
  isA: any;
  isL: boolean;
  version: number;
  objs: any;
  fonts: any;
  screen: any;
  frame: any;
  frameActionEvent: any;
  subFrameActionEvent: any;
  jspngCallBack: any;
  jspngCallBacks: any;
  jspngWorker: any;
  jspng2CallBack: any;
  jspng2CallBacks: any;
  jspng2Worker: any;
  tGameMap: tGameMap;
  tGameKeyboard: tGameKeyboard;
  tGameRefresh: tGameRefresh;
  tGameMapResource: tGameMapResource;
  tGameChipsetResource: tGameChipsetResource;
  tGameObjectResource: tGameObjectResource;
  tGameFaceResource: tGameFaceResource;
  tGameWindowResource: tGameWindowResource;
  tGameCharactor: tGameCharactor;
  tGameCharactorData: tGameCharactorData;
  tGameMessageWindow: tGameMessageWindow;
  tGameText: tGameText;
  tGameTalkResource: tGameTalkResource;
  tGameRoutineMap: tGameRoutineMap;
  tGameRoutineMapMove: tGameRoutineMapMove;
  tGameSelectTarget: tGameSelectTarget;
  tGameSoundResource: tGameSoundResource;
  tGameBgmResource: tGameBgmResource;
  tGameDungeonGenerator: tGameDungeonGenerator;
  tGameTownGenerator: tGameTownGenerator;
  tGameSchoolGenerator: tGameSchoolGenerator;
  tGameCastleGenerator: tGameCastleGenerator;
  tGameFieldGenerator: tGameFieldGenerator;
  tGameLog: tGameLog;
  tGameIconResource: tGameIconResource;
  tGameIcon24Resource: tGameIcon24Resource;
  tGameAffectMap: tGameAffectMap;
  tGameTime: tGameTime;
  tGameMenu: tGameMenu;
  tGameName: tGameName;
  tGameSkill: tGameSkill;
  tGameSkillAction: tGameSkillAction;
  tGameSkillActionWindow: tGameSkillActionWindow;
  tGameItem: tGameItem;
  tGameSave: tGameSave;
  tGameTitle: tGameTitle;
  tGameTitleWindow: tGameTitleWindow;
  tGameParts: tGameParts;
  tGamePlayerPartyInfo: tGamePlayerPartyInfo;
  tGameFukidashiResource: tGameFukidashiResource;
  tGameEmotionResource: tGameEmotionResource;
  tGameCalc: tGameCalc;
  tGameEquipmentWindow: tGameEquipmentWindow;
  tGameSelectFovTarget: tGameSelectFovTarget;
  tGameSelectFovTargetSkill: tGameSelectFovTargetSkill;
  tGameEffect: tGameEffect;
  tGameOverMapResource: tGameOverMapResource;
  tGameTrap: tGameTrap;
  tGameGoodTrap: tGameGoodTrap;
  tGameNumWindow: tGameNumWindow;
  tGameShop: tGameShop;
  tGameItemInfoWindow: tGameItemInfoWindow;
  tGameSkillActionInfoWindow: tGameSkillActionInfoWindow;
  tGameAdventurerGuild: tGameAdventurerGuild;
  tGameAdventurerGuildWindow: tGameAdventurerGuildWindow;
  tGameAdventurerGuildConfirmWindow: tGameAdventurerGuildConfirmWindow;
  tGameWeather: tGameWeather;
  tGameShortCut: tGameShortCut;
  tGameFarm: tGameFarm;
  tGameOption: tGameOption;
  tGameCooking: tGameCooking;
  tGameJob: tGameJob;
  tGameSleep: tGameSleep;
  tGameSpecialMap: tGameSpecialMap;
  tGameSkillWindow: tGameSkillWindow;
  tGameSkillInfoWindow: tGameSkillInfoWindow;
  tGameSkillShop: tGameSkillShop;
  tGameStatusWindow: tGameStatusWindow;
  tGameSlaveShop: tGameSlaveShop;
  tGameTextInputWindow: tGameTextInputWindow;
  tGameRecipe: tGameRecipe;
  tGameCreateWindow: tGameCreateWindow;
  tGameCharactorRuleWindow: tGameCharactorRuleWindow;
  tGameSelectWindow: tGameSelectWindow;
  tGameOptionWindow: tGameOptionWindow;
  tGameStorage: tGameStorage;
  tGameShukkabako: tGameShukkabako;
  tGameEnchantment: tGameEnchantment;
  tGameBlacksmith: tGameBlacksmith;
  tGameYubiwadukuri: tGameYubiwadukuri;
  tGameFishing: tGameFishing;
  tGameMapEditor: tGameMapEditor;
  tGameMyTown: tGameMyTown;
  tGameNouchi: tGameNouchi;
  tGameEditMember: tGameEditMember;
  tGameSteal: tGameSteal;
  tGameChangeProfile: tGameChangeProfile;
  tGameCriminalWindow: tGameCriminalWindow;
  tGameTableTalk: tGameTableTalk;
  tGameAllocateStatusWindow: tGameAllocateStatusWindow;
  tGameMapCharaCommonAction: tGameMapCharaCommonAction;
  tGameJobChange: tGameJobChange;
  tGameJobSlumGenerator: tGameSlumGenerator;
  tGameRectArea: tGameRectArea;
  tGameRoom: tGameRoom;
  tGameSkillActionBook: tGameSkillActionBook;
  tGameMyShop: tGameMyShop;
  tGameFullscreenLog: tGameFullscreenLog;
  tGameWindows: tGameWindows;
  tGameSelectImageTarget: tGameSelectImageTarget;
  tGameCreateCharactor: tGameCreateCharactor;
  tGameEventAnimation: tGameEventAnimation;
  tGameDesignedMap: tGameDesignedMap;
  tGameEtc: tGameEtc;
  tGameMaou: tGameMaou;
  tGameLoading: tGameLoading;
  tGameMagicalGirl: tGameMagicalGirl;
  tGameEventFrame: tGameEventFrame;
  tGameGameOver: tGameGameOver;
  tGameEvent: tGameEvent;
  tGameCreateUniqueCharactor: tGameCreateUniqueCharactor;
  tGameMain: tGameMain;
  tGameEtcTown: tGameEtcTown;
  tGameTougijo: tGameTougijo;
  tGameSlot: tGameSlot;
  tGamePoker: tGamePoker;
  tGameCasino: tGameCasino;
  tGameCharactorEquipRuleWindow: tGameCharactorEquipRuleWindow;
  tGameEnsei: tGameEnsei;
  tGameEquipRankup: tGameEquipRankup;
  tGameHikitsugi: tGameHikitsugi;
  tGameNoriai: tGameNoriai;
  tGameFieldMaterial: tGameFieldMaterial;
  tGameWar: tGameWar;
  tGameAkumuDungeon: tGameAkumuDungeon;
  tGameMyAdventurerCharactor: tGameMyAdventurerCharactor;
  tGameTutorial: tGameTutorial;
  tGameHelp: tGameHelp;
  tGameBazaarGenerator: tGameBazaarGenerator;
  tGameMaigo: tGameMaigo;
  tGameButsu: tGameButsu;
  tGameNaraku: tGameNaraku;
  tGameShitaiasari: tGameShitaiasari;
  tGameGod: tGameGod;
  tGameFaithWindow: tGameFaithWindow;
  tGameFaith: tGameFaith;
  tGameWeading: tGameWeading;
  tGameSozaifukuro: tGameSozaifukuro;
  tGameBaby: tGameBaby;
  tGameIdRecycle: tGameIdRecycle;
  tGameStoryWindow: tGameStoryWindow;
  tGameOpening: tGameOpening;
  tGameGamePad: tGameGamePad;
  tGameGameClear: tGameGameClear;
  tGameGamePadEditor: tGameGamePadEditor;
  tGameGamePadBase: tGameGamePadBase;
  tGameRecord: tGameRecord;
  tGameOnsen: tGameOnsen;
  tGameSfpc: tGameSfpc;
  tGameYagi: tGameYagi;
  tGameLakeZou: tGameLakeZou;
  tGameStg: tGameStg;
  tGameYukigassen: tGameYukigassen;
  tGameHoridashimono: tGameHoridashimono;
  tGameDairyQuest: tGameDairyQuest;
  tGameAnimalWood: tGameAnimalWood;
  tGameChikaMakyo: tGameChikaMakyo;
  tGameHikyo: tGameHikyo;
  tGameUniqueQuest: tGameUniqueQuest;
  tGameShortEvent: tGameShortEvent;
  tGameJashin: tGameJashin;
  tGameVersion: tGameVersion;
  tGameMyTownRuleWindow: tGameMyTownRuleWindow;
  tGameSubTown: tGameSubTown;
  tGameMyTownMeibo: tGameMyTownMeibo;
  tGameExMapData: tGameExMapData;
  tGameSelectBgmWindow: tGameSelectBgmWindow;
  tGameMenuShortcut: tGameShortCut;
  tGameGameOptionWindow: tGameGameOptionWindow;
  tGameRyourifukuro: tGameRyourifukuro;
  tGameShokuzaifukuro: tGameShokuzaifukuro;
  tGameHyk: tGameHyk;
  tGameHikitsugiNakama: tGameHikitsugiNakama;
  tGameAcn: tGameAcn;
  tGameSoubifukuro: tGameSoubifukuro;
  tGameCriminalRouya: tGameCriminalRouya;
  tGameMeiro: tGameMeiro;
  tGameNw: tGameNw;
  tGameMatsuri: tGameMatsuri;
  tGameIkesu: tGameIkesu;
  tGameTextInputWindow2: tGameTextInputWindow2;
  tGameNumWindow2: tGameNumWindow2;
  tGameJinja: tGameJinja;
  tGameK1up: tGameK1up;
  tGameLoading2: tGameLoading2;
  tGameDialog: tGameDialog;
  tGameMamonoJisho: tGameMamonoJisho;
  tGameNakamaHaken: tGameNakamaHaken;
  loadFinishData: any;
  firstLogData: any;
  windowLabelMaxWidth: any;
  limitLevel: any;
  tGameData: tGameData;
  init(a: any): void;
  initNext(a: any): void;
  initLoad(a: any): void;
  initFrame(): void;
  frameAction(a: any): void;
  refreshCanvas(a: any): void;
  subFrameAction(a: any): void;
  subRefreshCanvas(a: any): void;
  loadJsData(a: any, b: any, c: any, d: any, e: any): void;
  loadJsDataText(a: any, b: any, c: any): any;
  loadImageBase(a: any, b: any, c: any, d: any): any;
  loadImage(a: any, b: any, c: any, d: any): any;
  /**
   * 乱数を取得する
   * @param min 最小値
   * @param max 最大値
   */
  getRandom(min: number, max: number): number;
  clearAllCanvase(a: any, b: any): void;
  hiddenCanvases(a: any): void;
  viewCanvases(a: any): void;
  clearBlurCanvases(a: any): void;
  setBlurCanvases(a: any): void;
  checkLoadFinish(): any;
  getBrowser(): any;
  getRandomBias(a: any, b: any): any;
  log(a: any, b: any): void;
  clog(a: any, b: any, c: any): void;
  shuffleArray(a: any): void;
  close(): void;
  reload(): void;
  changeScreenSize(a: any): any;
  startNewGame(a: any, b: any, c: any): void;
  outputMap(a: any, b: any, c: any): any;
  outputRoom(a: any, b: any, c: any): any;
  setViewPosition(a: any): void;
  convertCsv(a: any): any;
  loadJsPngWorker(a: any, b: any, c: any): any;
  loadJsPng2Worker(a: any, b: any, c: any): any;
  isTr(): any;
  getGameType(): any;
  getGameTypeSub(): any;
  actJsPngWorker(a: any, b: any): void;
  actJsPng2Worker(a: any, b: any): void;
  initJsError(): void;
  initFirstLog(): void;
  getCachePrefix(): any;
  loadFont(): void;
  activeAchievement(a: any, b: any): any;
  getGameNanido(a: any, b: any): any;
}

declare class tGameMamonoJisho {
  parent: tGameMain;
  init(a: any): void;
  getDungeonTypes(): any;
  getDungeonEnemyIds(a: any): any;
  getDungeonObjectId(a: any): any;
  getTargetEnemyLevel(a: any): any;
  getTargetEnemyBaseData(a: any): any;
  createcharactor(a: any): any;
  getDropItems(a: any): any;
  view(a: any, b: any): void;
  viewMamonoInfo(a: any, b: any, c: any): any;
  viewDropItems(a: any, b: any): void;
  unlock(a: any, b: any): void;
}

declare class tGameMaou {
  parent: tGameMain;
  data: any;
  images: any;
  tobatsuLvs: any;
  init(a: any): void;
  createMap(a: any, b: any): void;
  createAlly(a: any, b: any): void;
  setMaou(a: any, b: any, c: any): any;
  createEnemy(a: any, b: any, c: any): void;
  getMaouMapAll(a: any): any;
  getMaouMaps(a: any): any;
  getMaouObject(a: any): any;
  getMaouBarriers(a: any, b: any): any;
  getRandomMaouId(a: any): any;
  getPayment(a: any): any;
  getNextPaymentTime(a: any): any;
  createFieldData(): any;
  setTimeOverFaith(a: any, b: any): void;
  checkTimeOver(a: any): any;
  destroyWorld(a: any, b: any): void;
  getFreeCollaborator(a: any): any;
  getSetsumei(a: any, b: any, c: any): any;
  getItemSetsumei(a: any): any;
  viewAdventureGuildBoard(a: any, b: any): void;
  getPayItems(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_maougekiha(a: any, b: any): any;
  oneActionFinishAction_maouteshitashutsugen(a: any, b: any): any;
}

declare class tGameMap {
  parent: tGameMain;
  data: any;
  maps: any;
  cvs: any;
  ctx: any;
  scvs: any;
  sctx: any;
  obcvs: any;
  obctx: any;
  o1cvs: any;
  o1ctx: any;
  o2cvs: any;
  o2ctx: any;
  vcvs: any;
  vctx: any;
  pcvs: any;
  pctx: any;
  cache: any;
  init(): void;
  getChipDataByFieldChip(a: any): any;
  getChipData(a: any): any;
  getYukaChip(a: any, b: any, c: any, d: any, e: any): any;
  initLoad(a: any): void;
  addMap(a: any): any;
  removeMap(a: any): any;
  drawSmallMap(a: any): any;
  getSmallMapData(a: any): any;
  drawGroundOver(a: any, b: any): any;
  drawGround(a: any, b: any): void;
  drawOutSightGround(a: any): void;
  drawObject(a: any, b: any): void;
  drawOver(a: any, b: any): void;
  getFovCharactors(a: any): any;
  convertMapData(a: any, b: any, c: any, d: any): any;
  convertMapData2(a: any, b: any, c: any, d: any): any;
  getFov(a: any): any;
  getAroundCanMove(a: any): any;
  dropItem(a: any): any;
  removeObject(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  getMap(a: any): any;
  getRoute(a: any, b: any, c: any, d: any, e: any, f: any, g: any): any;
  nextTrunFukidashi(a: any): any;
  nextTrunEmotion(a: any): any;
  getFreeSpaces(a: any, b: any, c: any, d: any, e: any): any;
  checkObjectSpace(a: any, b: any, c: any, d: any): any;
  searchMapObject(a: any, b: any): any;
  searchMapObjectType(a: any, b: any): any;
  getObjectSmap(a: any, b: any, c: any): any;
  checkAdjacentCharactor(a: any, b: any): any;
  getRandomSpace(a: any): any;
  getRandomSpace2(a: any): any;
  getDistance(a: any, b: any): any;
  getDistance2(a: any, b: any): any;
  getCharactorDistances(a: any, b: any): any;
  getDirection(a: any, b: any, c: any): any;
  getMapSpData(a: any, b: any): any;
  removeMapObjects(a: any): any;
  takeSkillAction(a: any, b: any, c: any, d: any, e: any): any;
  clearCacheViewMap(): void;
  cloneMap(a: any): any;
  getInMapPosition(a: any, b: any): any;
  dropMap(a: any, b: any): any;
  setCommonObjectCharactors(a: any): void;
  getIncludeAreas(a: any, b: any, c: any): any;
  getTargetAreaCanvas(a: any, b: any, c: any): any;
  removeOneActionFinishAction(a: any, b: any): any;
  setGroundOverTarget(a: any, b: any, c: any): void;
  getAroundFreePositions(a: any, b: any, c: any): any;
  getCalMoveMap(a: any): any;
  drawLevel(a: any): void;
  createFieldRoad(a: any): any;
  cacheFieldRoadData(a: any): any;
  drawFieldRoad(a: any): any;
}

declare class tGameMapCharaCommonAction {
  parent: tGameMain;
  init(a: any): void;
  actionBeforePatternOne(a: any, b: any, c: any, d: any): void;
  actionPatternOne(a: any, b: any): any;
  viewMapActionPatternOne(a: any, b: any): any;
  actionPatternType_counter(a: any, b: any): any;
  viewMapActionPatternOne_myhome(a: any, b: any): any;
  viewMapActionPatternOne_counter(a: any, b: any): any;
  viewMapActionPatternOne_bed(a: any, b: any, c: any): any;
  viewMapActionPatternOne_chair(a: any, b: any, c: any): any;
  viewMapActionPatternOne_diningchair(a: any, b: any, c: any): any;
  viewMapActionPatternOne_farm(a: any, b: any): any;
  viewMapActionPatternOne_goei(a: any, b: any): any;
  viewMapActionPatternOne_kenkyu(a: any, b: any): any;
  viewMapActionPatternOne_imushitsu(a: any, b: any): any;
  actionPatternType_myhome(a: any, b: any): any;
  actionPatternType_myhomecenter(a: any, b: any): any;
  actionPatternType_kenkyu(a: any, b: any): any;
  actionPatternType_imushitsu(a: any, b: any): any;
  actionPatternType_animalwood(a: any, b: any): any;
  actionPatternType_bed(a: any, b: any, c: any): any;
  actionPatternType_noriaibasha(a: any, b: any): any;
  actionPatternType_aroundtypedataposition(a: any, b: any): any;
  actionPatternType_randompoint(a: any, b: any): any;
  actionPatternType_chair(a: any, b: any, c: any): any;
  actionPatternType_diningchair(a: any, b: any, c: any): any;
  actionPatternType_adventureguild(a: any, b: any, c: any): any;
  actionPatternType_goei(a: any, b: any): any;
  moveTargetPoint(a: any, b: any): any;
  actionPatternBeforeAction(a: any, b: any, c: any, d: any): void;
  actionPatternType_farm(a: any, b: any): any;
  updateActionPattern(a: any): any;
  getCharactorObjects(a: any): any;
  selectEatTarget(a: any, b: any): any;
  selectRandomTarget(a: any, b: any): any;
  selectRandomNightTarget(a: any, b: any): any;
  selectBedTarget(a: any, b: any): any;
  updateActionPattern_default(a: any, b: any): any;
  updateActionPattern_outmain(a: any, b: any): any;
  updateActionPattern_shop(a: any, b: any): any;
  updateActionPattern_shop2(a: any, b: any): any;
  updateActionPattern_housemain(a: any, b: any): any;
  updateActionPattern_farmor(a: any, b: any): any;
  updateActionPattern_king(a: any, b: any): any;
  updateActionPattern_goei(a: any, b: any): any;
  updateActionPattern_kenkyu(a: any, b: any): any;
  updateActionPattern_isha(a: any, b: any): any;
  updateActionPattern_animalwood(a: any, b: any): any;
  updateActionPattern_tougijo_uketsuke(a: any, b: any): any;
  updateActionPattern_casino_dealer(a: any, b: any): any;
  updateActionPattern_casino_chonin(a: any, b: any): any;
  updateActionPattern_noriai(a: any, b: any): any;
  updateActionPattern_shitaiasari(a: any, b: any): any;
  addTimeAction(a: any, b: any, c: any): any;
  viewMapFixPosition(a: any): void;
  okiru(a: any, b: any): any;
}

declare class tGameMapEditor {
  parent: tGameMain;
  objs: any;
  data: any;
  isInit: any;
  viewData: any;
  scrollBarMinSize: any;
  screenSize: any;
  objectPos: any;
  templateData: any;
  events: any;
  myData: any;
  historyMax: any;
  editorHeight: any;
  selectTargetCharactorCache: any;
  init(a: any): void;
  initLoad(a: any): void;
  getLearnObject(a: any): any;
  setLearnObject(a: any): any;
  getLearnTemplate(a: any): any;
  setLearnTemplate(a: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initData(): any;
  viewEditor(a: any): void;
  updateConvertMapData(): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  keyEvent(): void;
  viewCanvasCursor(a: any, b: any): void;
  getCanvasCursorPosition(): any;
  setBackground(a: any, b: any): any;
  setObject(a: any, b: any): any;
  moveObject(a: any): any;
  viewEditorBackgroundCursor(): any;
  setScrollBar(): void;
  getScrollBarInfo(): any;
  addScrollBarPosition(a: any, b: any): void;
  setScrollBarPosition(a: any): void;
  setScrollPosition(): void;
  setScale(a: any): void;
  setMode(a: any): void;
  viewEditorObjectCursor(): any;
  viewObjectMenu(a: any): void;
  hiddenObjectMenu(): void;
  actionCancel(): void;
  actionRegist(): void;
  viewLock(): void;
  hiddenLock(): void;
  selectTargetCharactor(a: any, b: any): void;
  isEnableObject(a: any): any;
  isEnableTemplate(a: any): any;
  drawEditorObject(): void;
  changeSelectTemplate(): any;
  setTemplate(a: any, b: any): any;
  selectObjectType(a: any, b: any): void;
  getHouses(): any;
  setLearnTemplateObject(a: any): any;
  initObjectSelectorPosition(): void;
  updateTemplateDisabled(): void;
  clearMap(a: any): any;
  viewConfirm(a: any): void;
  releaseAllRecipe(): void;
  addHistory(): void;
  changeHistory(a: any): any;
  updateHistoryButton(): void;
  callBackClearViewData(): void;
  editorToggle(a: any): void;
  actionRightClick(a: any): void;
  clearObjectLongTapTimer(): void;
}

declare class tGameMapResource {
  parent: tGameMain;
  mapData: any;
  mapBaseData: any;
  init(a: any): void;
  loadData(a: any, b: any): any;
  loadDataWithMyData(a: any, b: any): any;
  getDrawMapData(a: any, b: any): void;
}

declare class tGameMatsuri {
  parent: tGameMain;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  getMapId(): any;
  createMap_act(a: any): any;
  addCharactor(a: any, b: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_creatematsuri(a: any, b: any): any;
}

declare class tGameMeiro {
  parent: tGameMain;
  data: any;
  imgs: any;
  objs: any;
  viewData: any;
  size: any;
  chipsize: any;
  vcvs: any;
  vctx: any;
  isInit: any;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  affectDoor(a: any, b: any): void;
  affect(a: any, b: any, c: any): void;
  isHoshu(): any;
  hoshu(a: any): void;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_createmeiro(a: any, b: any): any;
  initLoad(a: any): any;
  loadLinkJson(a: any): void;
  initFrame(a: any): void;
  view(a: any): void;
  clear(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  inputKey(): void;
  setStage(a: any): void;
  drawView(): void;
  draw3DMeiro(): any;
  getTargetPosition(a: any, b: any): any;
  drawBg(): any;
  drawMap(): void;
  actDeguchi(): void;
  actMenu(): void;
}

declare class tGameMenu {
  parent: tGameMain;
  init(a: any): void;
  viewMenu(a: any, b: any): void;
  viewItem(a: any, b: any): void;
  viewEquipment(a: any, b: any): void;
  viewSkillAction(a: any, b: any): void;
  viewSkill(a: any, b: any): void;
  viewStatus(a: any, b: any): void;
  viewAllocateStatus(a: any): void;
  viewReceivedQuest(a: any): void;
  viewDairyQuest(a: any): void;
  viewOptionGroup(a: any, b: any): void;
  viewOption(a: any): void;
  viewOption2(a: any): void;
  viewOption3(a: any): void;
  viewMenuShortcut(a: any): void;
  viewGameOption(a: any): void;
  viewHelp(a: any): void;
  viewEditMyTown(a: any, b: any): void;
  viewEditSubTown(a: any, b: any): void;
  viewEditNouchi(a: any, b: any): void;
  viewEditMember(a: any, b: any): void;
  viewLog(a: any, b: any): void;
  viewSubInfo(a: any): void;
}

declare class tGameMenuShortcutWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  getShortCuts(): void;
  viewBottomWindow(): any;
  updateItems(a: any): void;
}

declare class tGameMessageWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  viewData: any;
  cursor: any;
  defaultViewItemMaxNum: any;
  viewItemMaxNum: any;
  init(a: any): void;
  viewMessageWindow(a: any, b: any): any;
  drawAnswers(a: any): any;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  drawPage(a: any): void;
  convertContinuationMessages(a: any, b: any): any;
  viewContinuationMessageWindow(a: any, b: any): void;
}

declare class tGameMyAdventurerCharactor {
  parent: tGameMain;
  max: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  initData(): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  save(a: any): void;
  load(a: any): void;
  getLocalStorageData(a: any): void;
  view(a: any, b: any): void;
  convertChara2Mydata(a: any, b: any): any;
  convertImport2Mydata(a: any): any;
  getItemDescription(a: any, b: any): any;
  viewError(a: any): void;
  export(a: any, b: any): any;
  exportK1up(a: any, b: any): void;
  convertTextB64(a: any, b: any): void;
  confirmImport(a: any): any;
  refreshOverwriteTargets(a: any, b: any): void;
  getOverwriteFaceList(): any;
  getOverwriteChipsetList(a: any): any;
  viewSelectOverwriteTalkTargetWindow(a: any): void;
  enableNew(): any;
}

declare class tGameMyShop {
  parent: tGameMain;
  maxItemNum: any;
  kakuchoMoney: any;
  tesuryoMax: any;
  data: any;
  viewData: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  isViewSelectColumn(): any;
  getSelectColumn(): any;
  view(a: any, b: any): void;
  viewIn1(a: any): void;
  viewIn2(a: any, b: any): void;
  inItem(a: any): any;
  viewOut1(a: any): void;
  viewOut2(a: any): void;
  outItem(a: any): any;
  removeItem(a: any, b: any): any;
  kakucho(a: any): void;
  buy(): void;
  getTesuryoRate(a: any, b: any): any;
}

declare class tGameMyTown {
  parent: tGameMain;
  init(a: any): void;
  getTargetMapCharaNum(a: any, b: any): any;
  isHomeMyTownSubTown(a: any): any;
  isInHomeMyTownSubTown(a: any): any;
  getMyTownName(): any;
  getChipData(a: any): any;
  setMyTown(a: any, b: any): any;
  createMyTownWithLoad(a: any, b: any): void;
  moveMyTown(a: any): any;
  createMyTown(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewMenuWindow(a: any): void;
  gotoMyTown(a: any, b: any): any;
  checkUpdateMap(a: any): any;
  affectCharactor(a: any): any;
  joinReleaseRecipe(a: any): void;
  isMyTownNakamaType(a: any): any;
  getMyTownNakamaType(a: any): any;
  getMyTownNakamaCtype(a: any): any;
  setNightBgmMenu(a: any): void;
}

declare class tGameMyTownMeibo {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  viewWindow(a: any): any;
  getItemDescription(a: any, b: any): any;
  changeCharaTown(a: any, b: any): any;
  isEnableChangeJuninToNakama(a: any, b: any): any;
  isEnableChangeNakamaToJunin(a: any): any;
  changeJuninToNakama(a: any, b: any): any;
  changeNakamaToJunin(a: any): any;
}

declare class tGameMyTownRuleWindow {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  isEnableCharactor(a: any): any;
  viewCharactorRuleWindow(a: any, b: any): any;
}

declare class tGameNakamaHaken {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  view(a: any, b: any): void;
  viewMenu(a: any): void;
  viewSelectHakenNakama(a: any): void;
  getHakenKanouCharas(): any;
  getHakenchuCharas(): any;
  isHakenKanouChara(a: any): any;
  refreshDungeonLevel(a: any): void;
  initCharaValue(a: any): void;
  getDungeonNanido(a: any, b: any): any;
  isHakenNow(a: any): any;
  getHakenTime(a: any, b: any): any;
  registHaken(a: any, b: any, c: any): void;
  setHakenClose(a: any): void;
  registHakenCancel(a: any, b: any): void;
  viewHakenchuNakama(a: any): void;
  setResultInfo(a: any): void;
  getHoshuBUnkatsu(a: any): any;
  viewResult(a: any, b: any): void;
  unlockRandomMamono(a: any): any;
}

declare class tGameName {
  parent: tGameMain;
  nameData: any;
  init(a: any): void;
  initLoad(a: any): void;
  createCharactorName(a: any): any;
  createTownName(a: any): any;
  createSchoolName(): any;
  createCastleName(): any;
  createSlumName(): any;
}

declare class tGameNaraku {
  parent: tGameMain;
  init(a: any): void;
  getDungeonLevel(a: any): any;
  getDungeonFloorFix(a: any): any;
  refreshDungeon(a: any, b: any): any;
  createDungeon(a: any): any;
  createNaraku(a: any, b: any): any;
  getEscapeNextData(): any;
}

declare class tGameNoriai {
  parent: tGameMain;
  init(a: any): void;
  selectMokutekichi(a: any): any;
  moveEvent(a: any): any;
  start(a: any): void;
  createRestMap(): any;
  restFinish(a: any): any;
  yatouFinish(a: any): any;
  addTime(a: any): any;
  createYatouMap(): any;
  finishYatou(a: any): any;
  removeNoriaiBashaObject(a: any): void;
}

declare class tGameNouchi {
  parent: tGameMain;
  init(a: any): void;
  getNouchiName(): any;
  getChipData(a: any): any;
  setNouchi(a: any, b: any): any;
  createNouchiWithLoad(a: any, b: any): void;
  moveNouchi(a: any): any;
  createNouchi(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewMenuWindow(a: any): void;
  checkUpdateMap(a: any): any;
}

declare class tGameNumWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  inputFontSize: any;
  viewData: any;
  cursor: any;
  textBox: any;
  keypadData: any;
  init(a: any): void;
  isEnableKeypad(): any;
  inputKeypad(a: any): void;
  viewNumWindow(a: any, b: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setNum(a: any, b: any, c: any): any;
  getInputValue(): any;
}

declare class tGameNumWindow2 {
  parent: tGameMain;
  objs: any;
  viewData: any;
  cursor: any;
  keys: any;
  init(a: any): void;
  viewNumWindow(a: any, b: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  updateCursor(): void;
  setValue(a: any): void;
  changeTab(a: any): void;
}

declare class tGameNw {
  parent: tGameMain;
  isEnabled: any;
  callObj: any;
  callObj_screen: any;
  callBacks: any;
  requires: any;
  selectFileDatas: any;
  currentDir: any;
  currentDir2: any;
  pwd: any;
  myAdvTmpData: any;
  greenworks: any;
  activeAchievementCache: any;
  isInitError: any;
  init(a: any): any;
  initError(): void;
  refreshWindowsFnc(a: any): void;
  loadRequire(a: any): any;
  initDir(a: any): void;
  initLoad(a: any): void;
  pageClose(): any;
  pageReload(): any;
  getSaveList(a: any): any;
  getSaveData(a: any, b: any): any;
  setSaveData(a: any, b: any, c: any): any;
  setSaveDataBackup(a: any, b: any): any;
  deleteSaveData(a: any, b: any): any;
  changeContentSize(a: any, b: any, c: any, d: any): void;
  changeContentSize__resize(a: any, b: any, c: any, d: any): void;
  changeContentSize__fullscreen(a: any, b: any, c: any, d: any): void;
  sendJsSysError(a: any, b: any): void;
  exportMyAdventurerCharactor(a: any, b: any, c: any, d: any, e: any): any;
  getExportMyAdventurerCharactorK1upData(a: any, b: any, c: any, d: any, e: any): any;
  importMyAdventurerCharactor(a: any): void;
  importMyAdventurerCharactor2FromBase64Data0(a: any, b: any): void;
  importMyAdventurerCharactor2FromData0(a: any, b: any): any;
  overwriteMyAdventurerCharactorData(a: any, b: any, c: any, d: any, e: any, f: any): any;
  sendIsTr(): void;
  exportMpaData(a: any, b: any): any;
  importMapData(a: any): void;
  closeGame(): void;
  setSelectFile(a: any): void;
  activeAchievement(a: any, b: any): any;
  initMydata(a: any): void;
  getControllerType(a: any): void;
  isSteamInBigPictureMode(a: any): any;
  overwriteMydataFace(a: any, b: any, c: any): any;
  overwriteMydataItem(a: any, b: any, c: any): any;
  overwriteMydataChipset(a: any, b: any, c: any): any;
  overwriteMydataTalk(a: any, b: any, c: any, d: any): any;
  getTargetImageBase64(a: any, b: any): any;
  openBrowser(a: any, b: any): void;
  outputFile(a: any, b: any): void;
}

declare class tGameObjectResource {
  parent: tGameMain;
  objectData: any;
  cantMoveMap: any;
  init(a: any): void;
  loadObject(a: any): void;
  createID(): any;
  getMapEditorData(a: any): any;
  convertData(a: any): any;
  convertDoorObject(a: any): any;
  tryOpenDoor(a: any): any;
  tryOpenStorage(a: any): any;
  tryOpenChest(a: any): any;
  tryOpenMonsterChest(a: any, b: any): any;
  openDoor(a: any): any;
  closeDoor(a: any): any;
  getOpenDoorInfo(a: any): any;
  getOpenStorageInfo(a: any): any;
  getOpenChestInfo(a: any): any;
  affect(a: any): any;
  getCantMoveMap(a: any): any;
  createFwood(a: any): any;
  yurasuFwood(a: any, b: any): void;
  inStorageItem(a: any, b: any, c: any, d: any, e: any): any;
  outStorageItem(a: any, b: any, c: any, d: any, e: any): any;
  getStorageMaxSpace(a: any): any;
  getStorageSpace(a: any): any;
  addStorageItem(a: any, b: any, c: any, d: any, e: any): any;
  removeStorageItem(a: any, b: any, c: any, d: any): any;
  createStorage2(a: any): any;
  createStorage3(a: any): any;
  createStorage4(a: any): any;
  createRankChest(a: any): any;
  createLevelMonsterChest(a: any): any;
  createChest(a: any): any;
  createMonsterChest(a: any): any;
  createRankHibi(a: any): any;
  isTurnEventObject(a: any): any;
  turnAction(a: any): any;
  turnAction_bomb(a: any, b: any): any;
  takeSkillAction(a: any, b: any, c: any, d: any, e: any, f: any): any;
  takeSkillAction_yubaku(a: any, b: any, c: any, d: any, e: any, f: any): any;
  viewUnlockLog(a: any, b: any): any;
  affectWarikomi_dungeonnext(a: any, b: any): any;
  affectStorage2(a: any, b: any): void;
  viewHogyokuKetsugo(a: any, b: any): void;
  kanteisosei(a: any, b: any): void;
  trialErrorMessage(a: any, b: any): void;
}

declare class tGameOnsen {
  parent: tGameMain;
  init(a: any): void;
  view(a: any, b: any): void;
  view2(a: any, b: any): void;
  hairu(a: any): void;
  kyoka(a: any, b: any): any;
}

declare class tGameOpening {
  parent: tGameMain;
  talkData: any;
  viewData: any;
  hiddenCanvases: any;
  cvs: any;
  ctx: any;
  init(): void;
  view(a: any, b: any): any;
  view_k1(): void;
  view_k2(): void;
  view_k3(): void;
  view_k4(): void;
  view_k5(): void;
  viewMessage(a: any, b: any, c: any): void;
  createNohara(a: any): any;
  createAnkoku(a: any): any;
  createField(a: any): any;
  createTown(a: any): any;
  createDungeon(a: any): any;
}

declare class tGameOption {
  parent: tGameMain;
  masterData: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  initData(a: any): any;
  getDataValue(a: any): any;
  setDataValue(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  getKey(): any;
  save(a: any): void;
  load(a: any): void;
  getLocalStorageData(a: any): void;
  reflect(): void;
  updateLoadIndex(a: any, b: any): void;
  loadEx(a: any): void;
}

declare class tGameOptionWindow {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  viewOptionWindow(a: any, b: any): void;
  viewOptionWindow2(a: any, b: any): void;
  viewOptionWindow3(a: any, b: any): void;
  viewSysOptWindow(a: any, b: any): void;
}

declare class tGameOverMapResource {
  parent: tGameMain;
  chipsize: any;
  omapData: any;
  init(a: any): void;
  initLoad(a: any): void;
  getOrderMap(a: any): any;
  getRoundMap(a: any, b: any, c: any): any;
  getEdgeChipset(a: any): any;
  getChipsetIndex(a: any, b: any): any;
  drawChipset(a: any): any;
}

declare class tGameParts {
  parent: tGameMain;
  cvs: any;
  ctx: any;
  init(): void;
  createProgressBar(a: any, b: any, c: any, d: any, e: any, f: any): any;
}

declare class tGamePlayerPartyInfo {
  parent: tGameMain;
  cvs: any;
  ctx: any;
  isRequireRefresh: any;
  init(): void;
  setRefreshFlg(): void;
  viewPartyInfo(): void;
  viewCharactorInfo(a: any): any;
  frameActionDraw(a: any): any;
}

declare class tGamePoker {
  parent: tGameMain;
  data: any;
  objs: any;
  viewData: any;
  waits: any;
  init(a: any): void;
  getPlayerCoin(): any;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  initFrame(a: any): void;
  getShuffleCards(): any;
  getCardPosition(a: any): any;
  setCardImage(a: any, b: any): void;
  updateMymoney(): void;
  view(a: any): void;
  initBetView(a: any, b: any, c: any): any;
  setMode(a: any, b: any): void;
  clear(): void;
  startGame(): any;
  dealCards(a: any, b: any, c: any): any;
  checkMatch(): any;
  finishGame(): void;
  hit(a: any): void;
  animationGetCoin(a: any): void;
  changeCards(): void;
  throwCards(a: any, b: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawLock(): void;
  drawCursor(a: any): void;
  drawBet(): void;
  affect(a: any): void;
}

declare class tGameRecipe {
  parent: tGameMain;
  masterData: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  getLearn(a: any): any;
  setLearn(a: any): any;
  initData(): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  getUnlearnedList(a: any): any;
}

declare class tGameRecord {
  parent: tGameMain;
  init(a: any): void;
  view(a: any, b: any): void;
  view_chara(a: any, b: any): void;
  view_item(a: any, b: any): void;
  view_hikyo(a: any, b: any): void;
  view_item2(a: any, b: any): void;
}

declare class tGameRectArea {
  parent: tGameMain;
  init(a: any): void;
  getRectsOuterPoints(a: any): any;
  getRandomRectPosition(a: any, b: any, c: any): any;
  getMoveXY(a: any, b: any): any;
  getCoverRect(a: any, b: any): any;
  isCrossRect(a: any, b: any): any;
  isCrossLine(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): any;
  getCrossPosition(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): any;
}

declare class tGameRefresh {
  parent: tGameMain;
  tug: any;
  refreshCallBack: any;
  init(a: any): void;
  setCallBack(a: any): void;
  callAnimationFrame(): void;
}

declare class tGameRoom {
  parent: tGameMain;
  init(a: any): void;
  isSizeOver(a: any): any;
  wideRoad(a: any): void;
  createRoad(a: any): void;
  createRoomsMap(a: any): any;
  setObject(a: any): any;
  getCreateRoomCon_1(a: any): any;
  getCreateRoomCon_2(a: any): any;
  getCreateRoomCon_3(a: any): any;
  getCreateRoomCon_4(a: any): any;
  getCreateRoomCon_5(a: any): any;
  getCreateRoomCon_6(a: any): any;
  getCreateRoomCon_7(a: any): any;
  getCreateRoomCon_8(a: any): any;
  getCreateRoomCon_9(a: any): any;
  getCreateRoomCon_10(a: any): any;
  getCreateRoomCon_11(a: any): any;
  getCreateRoomCon_12(a: any): any;
  getCreateRoomCon_13(a: any): any;
  getCreateRoomCon_14(a: any): any;
  getCreateRoomCon_15(a: any): any;
  getCreateRoomCon_16(a: any): any;
  getCreateRoomCon_17(a: any): any;
  getCreateRoomCon_19(a: any): any;
  getCreateRoomCon_20(a: any): any;
  getCreateRoomCon_21(a: any): any;
  getCreateRoomCon_23(a: any): any;
  getCreateRoomCon_30(a: any): any;
  getCreateRoomCon_31(a: any): any;
  getCreateRoomCon_32(a: any): any;
  getCreateRoomCon_33(a: any): any;
  getCreateRoomCon_34(a: any): any;
  getCreateRoomCon_35(a: any): any;
  getCreateRoomCon_37(a: any): any;
  getCreateRoomCon_38(a: any): any;
  getCreateRoomCon_50(a: any): any;
  getCreateRoomCon_51(a: any): any;
  getCreateRoomCon_52(a: any): any;
  getCreateRoomCon_53(a: any): any;
  getCreateRoomCon_54(a: any): any;
  getCreateRoomCon_55(a: any): any;
  getCreateRoomCon_56(a: any): any;
  getCreateRoomCon_57(a: any): any;
  getCreateRoomCon_58(a: any): any;
  getCreateRoomCon(a: any): any;
  createMap(a: any): any;
  copyObjectLinks(a: any): any;
  createCharactor(a: any): any;
  setOCharabject(a: any): any;
  createAnimals(a: any): any;
  setOutFloorSubs(a: any, b: any): void;
  getShops(): any;
  setRandomShopTypes(a: any, b: any): any;
  updateHmapTypes(a: any, b: any): void;
  setDimensionStorage(a: any, b: any): any;
  refillStorage(a: any): void;
  getRandomTargetData(a: any, b: any): any;
  convertCounterPos(a: any, b: any): any;
  getRandomKyotenRoom(): any;
  setAroundMap(a: any): void;
  getTownRandomPosition(a: any): any;
  setRoomBoroiMap(a: any): void;
  convertTatemonoKabe(a: any, b: any, c: any): any;
}

declare class tGameRoutineMap {
  parent: tGameMain;
  isRequireCanvasRefresh: any;
  refreshData: any;
  viewMapData: any;
  mode: any;
  modeData: any;
  player: any;
  oneActionData: any;
  isAction: any;
  frameActionEvent: any;
  frameKey: any;
  isDisposeClearPressKeys: any;
  moveCache: any;
  beforeSmallMapSize: any;
  cutActionWaitTimeRate: any;
  isOverCanvasView: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  setForceStopCallBack(a: any): void;
  deleteForceStopCallBack(a: any): void;
  issetForceStopCallBack(): any;
  setFrameAction(a: any): void;
  frameAction_dispose(a: any): void;
  frameAction_frame(a: any): void;
  frameAction_draw(a: any, b: any): void;
  updateLastConvertMapData(a: any): void;
  clearOneActionSyncAction(): void;
  oneAction(a: any, b: any, c: any, d: any, e: any, f: any): void;
  oneActionAfterFinishAction(a: any): any;
  oneActionAfter(a: any): any;
  viewEffectLog(a: any): void;
  oneActionForce(a: any, b: any): void;
  oneActionWalkAnimation(a: any): void;
  oneActionWalk(a: any): any;
  updateLookMap(a: any): void;
  convertObjectLookMap(a: any): any;
  updateLookMapTarget(a: any, b: any, c: any): void;
  updateLookMapAll(): void;
  updateLookMapDarkAll(): void;
  updateFovTargets(): any;
  viewSmallMap(a: any): void;
  affectTarget(a: any): any;
  clearDiaonalCanvas(): void;
  drawArrow(): void;
  setMode(a: any, b: any): void;
  getFootMessageData(a: any, b: any, c: any): any;
  viewPlayerPositionLog(): any;
  viewPlayerPositionOverlookLog(): void;
  getCanMovePositions(a: any, b: any, c: any, d: any): any;
  viewMap(a: any, b: any, c: any, d: any, e: any, f: any): any;
  viewMap_action(a: any, b: any, c: any, d: any, e: any, f: any): any;
  viewMapEvent(a: any): void;
  setPlayerPosition(a: any, b: any): any;
  drawForce(a: any): void;
  edgeMove(a: any, b: any, c: any): any;
  getMapType(): any;
  actionPlayerAutoTurn(a: any): any;
  breakMap(a: any, b: any, c: any, d: any, e: any): any;
  checkPlayerTeamTimeLimit(a: any): any;
  getPositionAffectList(a: any, b: any): any;
  addFinishAction(a: any): any;
  yubakuAction(a: any, b: any): void;
  attackDamageAction(a: any, b: any, c: any): void;
  attackKaihiAction(a: any, b: any, c: any): void;
  etcAfterAction(a: any, b: any): void;
  updateMapCharactorStatus(): any;
  updateMapInfoAll(a: any): void;
  isInViewFrame(a: any, b: any): any;
  playerDeathEvent(): any;
  kanpaAction(a: any): any;
  viewLinkMap(a: any): any;
  viewBackLinkMap(a: any): any;
  playerAutoFootPickupItem(a: any): any;
  checkSpecialFlg(a: any, b: any): any;
  getUtime(): any;
  setTurnTimeFrameAction(a: any, b: any): void;
  changeOverCanvasView(a: any): void;
  setAutoOnmitsu(a: any): void;
}

declare class tGameRoutineMapMove {
  parent: tGameMain;
  isAction: any;
  callBack: any;
  init(a: any): void;
  move(a: any): any;
  setFrameAction(a: any): void;
  frameAction_dispose(a: any): void;
  frameAction_frame(a: any, b: any): void;
  frameAction_draw(a: any, b: any): void;
}

declare class tGameRyourifukuro {
  parent: tGameMain;
  data: any;
  itemType: any;
  itemIds: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  addItem(a: any): any;
  removeItem(a: any, b: any): any;
  inCharaItem(a: any, b: any, c: any): any;
  outCharaItem(a: any, b: any, c: any, d: any): any;
  azukeru(a: any): void;
  toridasu(a: any, b: any): void;
  taberu(a: any, b: any): void;
  view(a: any, b: any): void;
  getRyouriShunoMikanteiItems(): any;
  getRyouriShunoNoroiItems(): any;
  kanteiItem(a: any, b: any, c: any): any;
  noroikeshiItem(a: any, b: any, c: any): any;
  npcHoju(a: any, b: any): void;
  outOkuItem(a: any, b: any): any;
}

declare class tGameSave {
  parent: tGameMain;
  saveNumber: any;
  saveMaxNum: any;
  separate: any;
  downloadLink: any;
  importData: any;
  gcDefKey: any;
  headerData: any;
  gzipWorker: any;
  gunzipWorker: any;
  gzipCallBack: any;
  gunzipCallBack: any;
  init(a: any): void;
  setSaveNumber(a: any): void;
  getHeaderData(a: any): any;
  convertSaveData(a: any): any;
  zipData(a: any): any;
  zipDataWorker(a: any, b: any): void;
  unzipData(a: any): any;
  unzipDataWorker(a: any, b: any): void;
  initSaveData(): any;
  getSaveData(): any;
  getSaveKey(a: any): any;
  removeSaveData(a: any, b: any): void;
  save(a: any, b: any): void;
  saveSuspended(a: any): void;
  saveAndDownload(a: any): void;
  getSaveHeaders(a: any): void;
  splitSaveData(a: any): any;
  loadAct(a: any, b: any, c: any, d: any): any;
  loadSuspended(a: any, b: any): void;
  load(a: any, b: any): void;
  convertBase64ToUint8Array(a: any): any;
  getFileData(a: any): void;
  localstorageSetItem(a: any, b: any, c: any): any;
  localstorageGetItem(a: any, b: any): any;
  localstorageGetItemHeader(a: any, b: any): any;
  localstorageRemoveItem(a: any, b: any): any;
  localstorageGetKeys(a: any): any;
  setClearData(a: any, b: any): any;
  exportLocalStorageData(a: any): void;
  importLocalStorageData(a: any, b: any): any;
  selectImportLocalStorageDataFile(a: any): void;
  clearImportLocalStorageDataFile(a: any): void;
  selectedImportLocalStorageDataFile(a: any): any;
}

declare class tGameSchoolGenerator {
  parent: tGameMain;
  init(a: any): void;
  createSchoolWithLoad(a: any, b: any): void;
  createSchool(a: any, b: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  setGaito(a: any): void;
}

declare class tGameSelectBgmWindow {
  parent: tGameMain;
  init(a: any): void;
  getBgmItems(a: any): any;
  view(a: any): void;
}

declare class tGameSelectFovTarget {
  parent: tGameMain;
  modes: any;
  mode: any;
  viewData: any;
  cursor: any;
  hiddenCanvases: any;
  init(a: any): void;
  viewSelectTarget(a: any, b: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  changeTarget(a: any): any;
}

declare class tGameSelectFovTargetSkill {
  parent: tGameMain;
  viewData: any;
  cursor: any;
  hiddenCanvases: any;
  init(a: any): void;
  viewSelectTarget(a: any, b: any, c: any, d: any, e: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  changeTarget(a: any): any;
  drawTarget(): void;
}

declare class tGameSelectImageTarget {
  parent: tGameMain;
  viewData: any;
  cvs: any;
  ctx: any;
  cucvs: any;
  cuctx: any;
  cursor: any;
  margin: any;
  init(a: any): void;
  viewSelectTargetWindow(a: any, b: any, c: any): void;
  clear(): void;
  getOnePageData(a: any): any;
  getOneSize(a: any): any;
  drawPage(): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  changeTarget(a: any): any;
  drawCursor(): void;
  mousemoveEvent(a: any): void;
  mousedownEvent(a: any, b: any): any;
}

declare class tGameSelectTarget {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  view(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  selectPosition(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawArrow(a: any): void;
  clearCanvas(): void;
}

declare class tGameSelectWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewCharactorRuleMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  drawTextColumnData(a: any, b: any): void;
  drawSelectColumnData(a: any, b: any): void;
  drawFaceColumnData(a: any, b: any): void;
  drawChipsetColumnData(a: any, b: any): void;
  drawChipsetItemColumnData(a: any, b: any): void;
  changeSelectColumnItem(a: any): void;
  changeFaceColumnItem(a: any): void;
  changeChipsetColumnItem(a: any): void;
  changeChipsetItemColumnItem(a: any): void;
  getColumnLabelHeight(a: any, b: any, c: any): any;
  drawColumnData(a: any, b: any): any;
  okButtonColumnItem(a: any): any;
}

declare class tGameSfpc {
  parent: tGameMain;
  init(a: any): void;
  view(a: any, b: any): void;
  act(a: any): any;
}

declare class tGameShitaiasari {
  parent: tGameMain;
  init(a: any): void;
  tryCreate(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_shitaiasarifirst(a: any, b: any): any;
  oneActionFinishAction_shitaiasariinmap(a: any, b: any): void;
  oneActionFinishAction_shitaiasarichecktimeout(a: any, b: any): any;
  viewMap(a: any): void;
  deleteCharactor(): any;
  selectAnswer(a: any): any;
  affectAnswer(a: any): void;
  createTargetMap(): any;
  affectEnemyHone(a: any, b: any): void;
  timeoutEvent(a: any): void;
}

declare class tGameShokuzaifukuro {
  parent: tGameMain;
  data: any;
  types: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  addItem(a: any): any;
  removeItem(a: any, b: any, c: any): any;
  inCharaItem(a: any, b: any, c: any): any;
  outCharaItem(a: any, b: any, c: any, d: any): any;
  enableAzukeru(a: any): any;
  azukeru(a: any): void;
  toridasu(a: any, b: any): void;
  view(a: any, b: any): void;
  getShokuzaiShunoMikanteiItems(): any;
  getShokuzaiShunoNoroiItems(): any;
  kanteiItem(a: any, b: any, c: any): any;
  noroikeshiItem(a: any, b: any, c: any): any;
  searchItemId(a: any, b: any): any;
  outOkuItem(a: any, b: any, c: any): any;
}

declare class tGameShop {
  parent: tGameMain;
  init(a: any): void;
  checkNewItem(a: any, b: any): any;
  buy(a: any): any;
  sell(a: any): any;
  newItem(a: any): void;
  getLevelToStoreLevel(a: any, b: any): any;
  getStoreMaxLevel(a: any): any;
  isStoreLevelAnswer(a: any): any;
  getShopRankPlus(a: any): any;
  getRankUpPrice(a: any, b: any): any;
  shopLevelUp(a: any): void;
  getStoreScaleSpace(a: any): any;
  isStoreScaleAnswer(a: any): any;
  shopScaleUp(a: any): any;
}

declare class tGameShortCut {
  parent: tGameMain;
  maxNum: any;
  init(a: any): void;
  getShortCut(): any;
  setShortCutIdx(a: any, b: any, c: any, d: any): any;
  getShortCutIdx(a: any, b: any): any;
  actionShortCutIdx(a: any, b: any): any;
}

declare class tGameShortEvent {
  parent: tGameMain;
  chips: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  initChipData(): void;
  encount(a: any): any;
  drawBackground(a: any, b: any, c: any): void;
  choise(a: any): void;
  choise_allmember(a: any): void;
  choise_default(a: any): void;
  choise_act(a: any, b: any): void;
  choise_act_original(a: any, b: any): void;
  choise_act_escape(a: any, b: any): void;
  statusHenka(a: any): void;
  escape(a: any): void;
  finishNokoru(a: any): void;
  finishMessage(a: any, b: any): void;
  finishMessage2(a: any, b: any): void;
  getRandomCharactor(): any;
  getAllMember(): any;
  getAroundSpaces(a: any, b: any): any;
  getAroundSpacesTargetNum(a: any, b: any, c: any): any;
  getAroundSpace(a: any): any;
  choise_act_original_act_0001_0001(a: any, b: any): void;
  choise_act_original_act_0001_0002(a: any, b: any): void;
  choise_act_original_act_0001_0003(a: any, b: any): void;
  choise_act_original_act_0002_0001(a: any, b: any): void;
  choise_act_original_act_0002_0002(a: any, b: any): void;
  choise_act_original_act_0002_0003(a: any, b: any): void;
  choise_act_original_act_0003_0001(a: any, b: any): void;
  choise_act_original_act_0003_0002(a: any, b: any): void;
  choise_act_original_act_0003_0003(a: any, b: any): void;
  choise_act_original_act_0004_0001(a: any, b: any): void;
  choise_act_original_act_0004_0002(a: any, b: any): void;
  choise_act_original_act_0004_0003(a: any, b: any): void;
  choise_act_original_act_0005_0001(a: any, b: any): void;
  choise_act_original_act_0005_0002(a: any, b: any): void;
  choise_act_original_act_0006_0001(a: any, b: any): void;
  choise_act_original_act_0006_0002(a: any, b: any): void;
  choise_act_original_act_0007_0001(a: any, b: any): void;
  choise_act_original_act_0008_0001(a: any, b: any): void;
  choise_act_original_act_0009_0001(a: any, b: any): void;
  choise_act_original_act_0009_0002(a: any, b: any): void;
  choise_act_original_act_0010_0001(a: any, b: any): void;
  choise_act_original_act_0010_0002(a: any, b: any): void;
  choise_act_original_act_0011_0001(a: any, b: any): void;
  choise_act_original_act_0011_0002(a: any, b: any): void;
  choise_act_original_act_0012_0001(a: any, b: any): void;
  choise_act_original_act_0012_0002(a: any, b: any): void;
  choise_act_original_act_0013_0001(a: any, b: any): void;
  choise_act_original_act_0013_0002(a: any, b: any): void;
  choise_act_original_act_0013_0003(a: any, b: any): void;
  choise_act_original_act_0014_0001(a: any, b: any): void;
  choise_act_original_act_0015_0001(a: any, b: any): void;
  choise_act_original_act_0015_0002(a: any, b: any): void;
  choise_act_original_act_0016_0001(a: any, b: any): void;
  choise_act_original_act_0017_0001(a: any, b: any): void;
  choise_act_original_act_0018_0001(a: any, b: any): void;
  choise_act_original_act_0018_0002(a: any, b: any): void;
}

declare class tGameShukkabako {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  createShukkabako(a: any): any;
  viewWindow(a: any): void;
  viewDefault(a: any, b: any): void;
  uru(a: any): void;
  addShopSeed(a: any): any;
  kau(a: any): void;
  hoju(): any;
}

declare class tGameSkill {
  parent: tGameMain;
  skillData: any;
  npcSkills: any;
  init(a: any): void;
  initLoad(a: any): void;
  getExp(a: any, b: any): any;
  getLevelToExp(a: any, b: any, c: any): any;
}

declare class tGameSkillAction {
  parent: tGameMain;
  iconData: any;
  askillData: any;
  rankMagics: any;
  rankPhysics: any;
  init(a: any): void;
  initLoad(a: any): void;
  setRankAskills(): void;
  setRankAskills2(): void;
  getSkillName(a: any): any;
  convertSkillData(a: any): any;
  getSkillLanges(a: any, b: any): any;
  calSkillArea(a: any, b: any, c: any): any;
  viewEffect(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
  getSkillType(a: any): any;
  getTakeSkillActionResult(): any;
  takeSkillAction_summon(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_summonboss(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_summonanimal(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_battlereset(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_teamonmitsu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_allkanpa(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_alerm(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_cure(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_rcure(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_removecondition(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_badcondition(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_badcondition2(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_badcondition3(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_badcondition4(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_goodcondition(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_addcounter(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_bukizokusei(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_grantup(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_grantdown(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_grantrateup(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_tetsuya(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_grantratedown(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_cdtdamage(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mcure(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mmcure(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mcureremovecondition(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mcurebadcondition(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_statusupbadcondition(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_attack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_food(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_light(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_weatherchange(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_warmeirei(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_warbomb(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_teleport(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_teleport2(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_poschange(a: any, b: any, c: any, d: any, e: any, f: any): any;
  takeSkillAction_possekkin(a: any, b: any, c: any, d: any, e: any, f: any): any;
  takeSkillAction_poschikaduke(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_chohatsu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_shugo(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mitoosenu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_breaktrap(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_tagayasu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_farmsodatsu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_farmoishiku(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mizumaki(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_sozaisoujiki(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_seed(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_cookstart(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_chogostart(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_enchantmentstart(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_blacksmithstart(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_equiprankupstart(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_nejitaku(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_agechange(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_fspplus(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_fspminus(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_fspplus2(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_fspminus2(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_statusgrowth(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_statusgrowthlimit(a: any, b: any, c: any, d: any, e: any): any;
  createID(): any;
  updateSkill(a: any, b: any): any;
  createSkill(a: any): any;
  getExp(a: any, b: any): any;
  takeSkillAction_remote(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_shindou(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_bougen(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_remotebomb(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_statusup(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_statusdown(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_nanimoshinai(a: any, b: any, c: any, d: any, e: any): any;
  getDescription(a: any, b: any): any;
  takeSkillAction_bakuhatsu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_bakuhatsu2(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_yubaku(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_bombbakuhatsu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_music(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_hungry(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_damage(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_curse(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_rust(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_equipreinforce(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_equipkeiryoka(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_equipjuryoka(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_sennotobashi(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_sekkinattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_shuryo(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_setreuse(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_poschangeattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_haisuiattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_mettazashi(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_gaichu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_nantokaball(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_nantokabomb(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_setsuri(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_shittoattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_yumekuiattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_noroiattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_daichiattack(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_seimeisui(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_wariaidamage(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_randomspd(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_chokasoku(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_jigenyugami(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_pandorabox(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_zentaishiji(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_skillexp(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_randomkantei(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_randomnoroikeshi(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_noroitaiseiplus(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_jakukataiseiplus(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_noroitaiseiminus(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_jakukataiseiminus(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_enemykanyu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_bomb(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_fukitobasu(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_tosshin(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_createtrap(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_newskill(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_droprandomskill(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_skilllevelup(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_souden(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_henshin(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_hbook(a: any, b: any, c: any, d: any, e: any): any;
  takeSkillAction_askillwakuplus(a: any, b: any, c: any, d: any, e: any): any;
  shokujiResult(a: any, b: any): any;
  getMusicCondition(): any;
  getMusicActionCondition(): any;
  getScrollCondition(): any;
  getMagicCondition(): any;
  getActionCondition(): any;
  getLevelToRank(a: any, b: any): any;
  judgeCreateSkill(a: any): any;
  getKeishoRate(a: any, b: any, c: any, d: any): any;
  getVal(a: any, b: any, c: any): any;
  checkTargetEquipment(a: any, b: any): any;
  createItemSkill(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction(a: any, b: any, c: any, d: any): any;
  judgeAttackKaihiAction(a: any, b: any, c: any, d: any): any;
  getLuckRate(a: any, b: any, c: any): any;
  judgeAttackKaihiAction_kaihiToTargetChara(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction_toTargetChara(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction_toTargetCharaPhysicsLong(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction_toTargetCharaElementalCounter(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction_toTargetCharaElemental2Counter(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction_toMyself(a: any, b: any, c: any, d: any, e: any): any;
  judgeAttackDamageAction_toMyselfDying(a: any, b: any, c: any, d: any, e: any): any;
  isUseAction(a: any, b: any, c: any): any;
  getNewSkillLevel(a: any, b: any): any;
  updateNantokaBall(a: any): void;
  updateNantokaBomb(a: any): void;
  useSkillActionBefore(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
}

declare class tGameSkillActionBook {
  parent: tGameMain;
  randomTargets: any;
  init(a: any): void;
  initLoad(a: any): void;
  createRandomItem(a: any): any;
  createItem(a: any): any;
}

declare class tGameSkillActionInfoWindow {
  parent: tGameMain;
  cvs: any;
  ctx: any;
  fontSize: any;
  init(a: any): void;
  viewInfoWindow(a: any): any;
}

declare class tGameSkillActionWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewSkillMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewSkillActionWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  getSkillActionShortCuts(): void;
  viewBottomWindow(): any;
  updateSkills(a: any): void;
}

declare class tGameSkillInfoWindow {
  parent: tGameMain;
  cvs: any;
  ctx: any;
  fontSize: any;
  init(a: any): void;
  viewInfoWindow(a: any): any;
}

declare class tGameSkillShop {
  parent: tGameMain;
  init(a: any): void;
  checkNewItem(a: any): any;
  buyPlayerTeam(a: any): any;
  buy(a: any): any;
}

declare class tGameSkillWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewSkillMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewSkillWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
}

declare class tGameSlaveShop {
  parent: tGameMain;
  init(a: any): void;
  checkNewItem(a: any): any;
  createSlaveCharactor(a: any): any;
  buy(a: any): any;
}

declare class tGameSleep {
  parent: tGameMain;
  init(a: any): void;
  initLoad(a: any): void;
  sleep(a: any, b: any): void;
  sleepInn(a: any, b: any): void;
  sleepAction(a: any, b: any, c: any, d: any): void;
  getTogetherCharas(): any;
  sleepTogether(a: any, b: any): void;
  getSleepTime(a: any, b: any): any;
  sleepSave(a: any): any;
}

declare class tGameSlot {
  parent: tGameMain;
  data: any;
  img: any;
  objs: any;
  viewData: any;
  reelNum: any;
  reels: any;
  init(a: any): void;
  getPlayerCoin(): any;
  initFrame(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  updateMymoney(): void;
  getMatchLines(a: any): any;
  view(a: any): void;
  clear(): void;
  startGame(): void;
  finishGame(): void;
  choseiBet(): void;
  animationGetCoin(a: any): void;
  hit(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawBet(): void;
  drawGaming(): void;
}

declare class tGameSlotReel {
  parent: tGameMain;
  objs: any;
  viewData: any;
  init(a: any): void;
  initFrame(): void;
  clearGame(): void;
  updateReel(a: any, b: any): any;
  setReelIcon(a: any, b: any, c: any): void;
  moveReel(a: any): void;
  stopReel(): void;
}

declare class tGameSlumGenerator {
  parent: tGameMain;
  init(a: any): void;
  createSlumWithLoad(a: any, b: any): void;
  createSlum(a: any, b: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
}

declare class tGameSoubifukuro {
  parent: tGameMain;
  max: any;
  nameMaxLength: any;
  init(a: any): void;
  getEquipList(): any;
  searchTargetEquipment(a: any): any;
  view(a: any, b: any): void;
  isEnableRegistEquips(): any;
  registEquips(a: any): any;
  soubihazusu(a: any): any;
  soubiyobidasu(a: any, b: any): void;
  getItemDescription(a: any, b: any): any;
}

declare class tGameSoundResource {
  parent: tGameMain;
  soundData: any;
  playSounds: any;
  oggOrM4a: any;
  caches: any;
  init(a: any): void;
  loadSound(a: any): void;
  initLoad(a: any): void;
  allLoad(a: any): void;
  getAudio(a: any): any;
  loadPreload(a: any): void;
  getPath(a: any): any;
  loadBuffer(a: any): any;
  play(a: any, b: any): any;
  setVolume(a: any): any;
  reflectOption(a: any): void;
}

declare class tGameSozaifukuro {
  parent: tGameMain;
  data: any;
  types: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  addItem(a: any): any;
  removeItem(a: any, b: any, c: any): any;
  inCharaItem(a: any, b: any, c: any): any;
  outCharaItem(a: any, b: any, c: any, d: any): any;
  azukeru(a: any): void;
  toridasu(a: any, b: any): void;
  view(a: any, b: any): void;
  getSozaiShunoMikanteiItems(): any;
  getSozaiShunoNoroiItems(): any;
  kanteiItem(a: any, b: any, c: any): any;
  noroikeshiItem(a: any, b: any, c: any): any;
  searchItemId(a: any, b: any): any;
  outOkuItem(a: any, b: any, c: any): any;
}

declare class tGameSpecialMap {
  parent: tGameMain;
  init(a: any): void;
  initLoad(a: any): void;
  createQuest1Map(a: any, b: any): any;
  createQuest9Map(a: any, b: any): any;
  createFreeMap(a: any): any;
  createFreeMap_act(a: any): any;
  setWood(a: any): void;
  setStone(a: any): void;
  setToboku(a: any): void;
  setSaboten(a: any): void;
  setKirikabu(a: any): void;
  setItem(a: any): void;
  getFreeMapStartPosition(a: any, b: any): any;
}

declare class tGameStatusWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  cursor: any;
  pagesMaster: any;
  pages: any;
  dcvs: any;
  dctx: any;
  pcvs: any;
  pctx: any;
  init(a: any): void;
  clear(): void;
  viewStatusWindow(a: any, b: any): any;
  drawTable(a: any): any;
  drawProfile(): any;
  drawDefcdt(): any;
  drawCondition(): any;
  drawNpcEtc(): any;
  drawPage(a: any): any;
  drawPage_main(a: any): void;
  drawPage_defcdt(a: any): void;
  drawPage_condition(a: any): void;
  drawPage_npcetc(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  updateStatus(): void;
  isNpcEtc(a: any): any;
}

declare class tGameSteal {
  parent: tGameMain;
  data: any;
  img: any;
  viewData: any;
  size: any;
  skillId: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  view(a: any, b: any): void;
  setGameData(): void;
  clear(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): any;
  setFrameEvent_draw(a: any): void;
  getBlockPosition(a: any): any;
  getAroundCharaData(a: any): any;
}

declare class tGameStg {
  parent: tGameMain;
  data: any;
  img: any;
  objs: any;
  viewData: any;
  tGameStgBg: any;
  tGameStgShoot: any;
  tGameStgObject: any;
  tGameStgScene: any;
  tGameStgEnemy: any;
  tGameStgPoint: any;
  size: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  initFrame(a: any): void;
  view(a: any): void;
  clear(): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  inputKey(a: any): void;
  gameOver(): void;
  gameClear(): void;
}

declare class tGameStgBg {
  parent: tGameMain;
  stars: any;
  init(): void;
  update(a: any): void;
  draw(): void;
}

declare class tGameStgShoot {
  parent: tGameMain;
  playerWaitTime: any;
  init(a: any): void;
  addShoot(a: any): any;
  addShoot_1(a: any): void;
  update(a: any, b: any): void;
}

declare class tGameStgObject {
  parent: tGameMain;
  removeObject(a: any): void;
  addObject(a: any): any;
  updateSize(a: any): void;
  update(a: any): void;
  bombUpdate(a: any, b: any): void;
  draw(): void;
  drawOne(a: any): void;
  clash(a: any): any;
  clash2Objects(a: any, b: any): any;
  powerMinus(a: any, b: any): any;
}

declare class tGameStgScene {
  parent: tGameMain;
  scenes: any;
  init(): void;
  update(a: any): void;
}

declare class tGameStgEnemy {
  parent: tGameMain;
  addEnemy(a: any): any;
  addEnemy_1(a: any): void;
  addEnemy_2(a: any, b: any): void;
  addEnemy_4(a: any, b: any): void;
  addEnemy_6(a: any, b: any): void;
  addEnemy_7(a: any): void;
  addEnemy_8(a: any): void;
  addEnemy_9(a: any): void;
  update(a: any, b: any): void;
  shoot_time(a: any): void;
  shoot_boss(a: any): void;
  createShoot(a: any, b: any): void;
}

declare class tGameStgPoint {
  parent: tGameMain;
  draw(): void;
}

declare class tGameStorage {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  createStorage(a: any): any;
  viewWindow(a: any): any;
  initTalk(a: any): void;
  viewDefault(a: any, b: any): void;
  viewArrears(a: any): void;
  pay(): void;
  getItemNum(): any;
  payArrearsMoney(a: any): void;
  addItem(a: any): any;
  removeItem(a: any, b: any, c: any): any;
  inCharaItem(a: any, b: any, c: any): any;
  outCharaItem(a: any, b: any, c: any, d: any): any;
  outOkuItem(a: any, b: any, c: any): any;
  azukeru(a: any): void;
  toridasu(a: any, b: any): void;
  selectItem(a: any): void;
  help(a: any): void;
  maoupay(a: any, b: any): void;
  fusaiShometsu(): any;
  sortItems(a: any): void;
  setSortType(a: any, b: any): void;
  setSortTypeWindow(a: any, b: any): void;
  fixKakeraGroup(): void;
  searchItemId(a: any, b: any): any;
  getPrice(): any;
}

declare class tGameStoryWindow {
  parent: tGameMain;
  fontSize: any;
  textSpace: any;
  init(a: any): void;
  clearCanvas(): void;
  view(a: any): any;
  drawDetail(a: any): void;
  getDetail_god(): any;
  getDetail_megamiev(): any;
  getDetail_kaichoev(): any;
  getDetail_yushaev(): any;
  getDetail_sozaiev(): any;
  getDetail_kingev(): any;
  getDetail_kenkyuevent(): any;
  getDetail_elfevent(): any;
  getDetail_magicalgirl(): any;
  getDetail_guildev(): any;
  getDetail_gakushaev(): any;
  getDetail_byoinev(): any;
  getDetail_yureigl(): any;
  getDetail_oujiev(): any;
  getDetail_tenshokudn(): any;
  getDetail_oshitsuke(): any;
  getDetail_jashin(): any;
}

declare class tGameSubTown {
  parent: tGameMain;
  max: any;
  init(a: any): void;
  getSubTownName(a: any): any;
  getChipData(a: any): any;
  setSubTown(a: any, b: any): any;
  createSubTownWithLoad(a: any, b: any): void;
  moveSubTown(a: any): any;
  createSubTown(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewMenuWindow(a: any): void;
  gotoSubTown(a: any, b: any): any;
  checkUpdateMap(a: any): any;
  affectCharactor(a: any): any;
}

declare class tGameTableTalk {
  parent: tGameMain;
  viewData: any;
  init(a: any): void;
  view(a: any, b: any): any;
  viewSelectChara(): void;
  talk(a: any): any;
  talkStart(a: any): void;
}

declare class tGameTalkResource {
  parent: tGameMain;
  talkData: any;
  talkDataCache: any;
  emptyMsg: any;
  init(a: any): void;
  getCharaPlayerRelationKey(a: any): any;
  convertTalk(a: any, b: any, c: any): any;
  getChoiseMessage(a: any, b: any): any;
  getChoiseJoinTeamMessage(a: any, b: any, c: any, d: any): any;
  getChoiseRequestMyTownMessage(a: any, b: any, c: any, d: any): any;
  getChoiseRemoveTeamMessage(a: any, b: any, c: any, d: any): any;
  getChoiseQuestMessage(a: any, b: any, c: any, d: any): any;
  getChoiseQuestConfirmMessage(a: any, b: any): any;
  getChoiseQuestFinishMessage(a: any, b: any): any;
  getChoiseQuestFailureMessage(a: any, b: any): any;
  getChoiseNotItemMessage(a: any, b: any): any;
  getChoiseNohinItemMessage(a: any, b: any): any;
  getFukidashiMssage(a: any, b: any): any;
  getCommonFukidashiMssage(a: any, b: any, c: any): any;
  getChoiseCondition(a: any, b: any): any;
  convertValue(a: any, b: any, c: any): any;
  initLoad(a: any): void;
  loadEventTalk(a: any, b: any): any;
  getRescueChoiseMessage(a: any): any;
  getRescueSuccessChoiseMessage(a: any): any;
  getFreeChoiseMessage(a: any, b: any, c: any): any;
  getFreeChoiseMessage2(a: any, b: any, c: any, d: any): any;
  getFreeChoiseMessage3(a: any, b: any, c: any, d: any, e: any): any;
  getFreeChoiseMessageList(a: any, b: any, c: any, d: any): any;
  viewKnockDownChoiseMessage(a: any, b: any): any;
  viewKnockDownCheerChoiseMessage(a: any, b: any): any;
  getQuest4SuccessChoiseMessage(a: any): any;
  getQuest4FailureChoiseMessage(a: any): any;
  getChoiseRequestRemoveMyTownMessage(a: any, b: any): any;
  getChoiseRequestRelationMessage(a: any, b: any, c: any, d: any): any;
  getCommonTalk(a: any, b: any, c: any): any;
  getTalkMessage(a: any, b: any, c: any): any;
  getAroundTalks(a: any): any;
  encodeMyTalkData(a: any): any;
  decodeMyTalkData(a: any): any;
  removeMyTlkDataToTalkData(a: any): void;
  setMyTlkDataToTalkData(a: any, b: any): any;
  loadMyTalkDataRange(a: any): void;
  loadMyTalkData(a: any): void;
  loadTargetMyTalkData(a: any, b: any): void;
  getTextTalkData(a: any, b: any): void;
  getTableTalkMessage(a: any, b: any, c: any): any;
  getSleepTogetherMessage(a: any, b: any, c: any): any;
  updateButtonKeyLabel(): void;
}

declare class tGameText {
  parent: tGameMain;
  colorData: any;
  cvs: any;
  ctx: any;
  cvs2: any;
  ctx2: any;
  textSpace: any;
  lineHeight: any;
  init(a: any): void;
  setFont(a: any, b: any, c: any): void;
  createTextSingleLine(a: any): any;
  createText(a: any): any;
  createText_en(a: any): any;
  createDamageText(a: any): any;
  initLoad(a: any): void;
}

declare class tGameTextInputWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  wcvs: any;
  wctx: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  viewData: any;
  textBox: any;
  init(a: any): void;
  viewTextInputWindow(a: any, b: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
}

declare class tGameTextInputWindow2 {
  parent: tGameMain;
  objs: any;
  viewData: any;
  cursor: any;
  keys: any;
  init(a: any): void;
  viewTextInputWindow(a: any, b: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  updateCursor(): void;
  setValue(a: any): void;
  changeTab(a: any): void;
}

declare class tGameTime {
  parent: tGameMain;
  cvs: any;
  ctx: any;
  isRequireRefresh: any;
  lastRect: any;
  init(a: any): void;
  setRefreshFlg(): void;
  getNow(): any;
  viewAmpm(a: any): void;
  getTimeToWaitTime(a: any): any;
  addTime(a: any, b: any, c: any): void;
  getZeroDate(a: any): any;
  getDate(a: any): any;
  calAge(a: any, b: any): any;
  getBirthDayToTime(a: any, b: any, c: any): any;
  createBiarthday(a: any, b: any): any;
  drawTime(): any;
  drawTime_en(): any;
  viewTime(): any;
  frameActionDraw(a: any): any;
  getTimeGroup(a: any): any;
  get6Time(a: any): any;
  setPlayTime(a: any): any;
  getTargetTimeText(a: any): any;
  setTimeBgm(a: any, b: any): any;
  setAdvanceTime(a: any): any;
}

declare class tGameTitle {
  parent: tGameMain;
  images: any;
  init(a: any): void;
  initLoad(a: any): void;
  viewTitle(): void;
  drawBackground(a: any, b: any): any;
  drawBackground_etc(a: any, b: any): any;
  drawBackground_title(a: any): void;
}

declare class tGameTitleWindow {
  parent: tGameMain;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  clearBottomData: any;
  optionClearData: any;
  init(a: any): void;
  clear(): void;
  viewSaveWindow(a: any, b: any, c: any): void;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  selectItem(a: any): void;
  deleteSave(a: any): void;
  updateItems(a: any): void;
  newGameBefore(a: any): void;
  newGame(a: any, b: any): void;
  startNewGame(a: any, b: any, c: any): void;
  viewError(a: any): void;
  checkMismatchSaveData(a: any): any;
  checkMismatchVersionSaveData(a: any): any;
  checkGameTypeSaveData(a: any): any;
  removeOptionInitButton(): void;
  setOptionInitButton(): void;
  viewOptionInitMenu(): void;
}

declare class tGameTougijo {
  parent: tGameMain;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  gotoBattleMap(a: any, b: any): any;
  createMap(): any;
  entry(a: any): void;
  escapeBattle(a: any): any;
  setBackMapData(): any;
  setEnemy(a: any, b: any): any;
  victoryBattle(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_victorybattle(a: any, b: any): any;
  getHoshu(a: any, b: any): any;
  getRankToLevel(a: any): any;
  getRankToMoney(a: any, b: any): any;
  updateHoshu(): any;
}

declare class tGameTownGenerator {
  parent: tGameMain;
  townTypes: any;
  init(a: any): void;
  createTownWithLoad(a: any, b: any): void;
  createTown(a: any, b: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  setYukiObjects(a: any): void;
}

declare class tGameTrap {
  parent: tGameMain;
  trapTypes: any;
  init(a: any): void;
  convertData(a: any): any;
  getRandomTrapToObject(a: any): any;
  getTrapToObject(a: any, b: any): any;
  getTrapObjectId(a: any): any;
  getTrapName(a: any): any;
  oneActionTrap(a: any): any;
  affect(a: any): any;
  runTrap(a: any, b: any): any;
  tryBreak(a: any): void;
}

declare class tGameTutorial {
  parent: tGameMain;
  talkData: any;
  viewData: any;
  hiddenCanvases: any;
  init(a: any): void;
  initLoad(a: any): void;
  updateLock(a: any, b: any, c: any): void;
  confirmView(a: any): void;
  createMap(a: any): any;
  viewPage1(): any;
  viewPage2(): any;
  viewPage3(): any;
  viewPage4(): any;
  viewPage5(): any;
  viewPage6(): any;
  viewPage7(): any;
  viewPage8(): any;
  viewPage9(): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_p1move(a: any, b: any): any;
  oneActionFinishAction_tutorialp5gekiha(a: any, b: any): void;
  oneActionFinishAction_tutorialp6gekiha(a: any, b: any): void;
  oneActionFinishAction_tutorialp7gekiha(a: any, b: any): void;
  createCharactor(): any;
  affectCharactor(a: any): any;
  affectCharactor_p2(a: any, b: any): void;
  affectCharactor_p3(a: any, b: any): void;
  affectCharactor_p4(a: any, b: any): void;
  edgeActionCallBack(a: any): any;
}

declare class tGameUniqueQuest {
  parent: tGameMain;
  init(a: any): void;
  viewMap(a: any): void;
  tryCreate(a: any): any;
  tryCreate_kantei(a: any): any;
  tryCreate_guild(a: any): any;
  tryCreate_ryoriya(a: any): any;
  tryCreate_mahouten(a: any): any;
  tryCreate_sakaba(a: any): any;
  tryCreate_seishokusha(a: any): any;
  tryCreate_nouka(a: any): any;
  tryCreate_kyoushi(a: any): any;
  tryCreate_kajiya(a: any): any;
  tryCreate_shonin(a: any): any;
  tryCreate_yadoya(a: any): any;
  tryCreate_shinan(a: any): any;
  getTargetChara(a: any, b: any, c: any): any;
  isCreate(a: any, b: any): any;
  actEventFinish(a: any, b: any, c: any): any;
  isEventNow(a: any, b: any): any;
  initEvEmptyData(a: any, b: any): void;
  setEvData(a: any, b: any, c: any): void;
  oneActionFinishAction(a: any, b: any, c: any): any;
  oneActionFinishAction_first(a: any, b: any, c: any): any;
  oneActionFinishAction_finish(a: any, b: any, c: any): any;
  oneActionFinishAction_ryoriya_enemy_nigetaka(a: any, b: any): any;
  oneActionFinishAction_uniquequestbossgekiha(a: any, b: any): any;
  oneActionFinishAction_seishokusha_hakahenka(a: any, b: any): any;
  oneActionFinishAction_kyoushi_wana(a: any, b: any): any;
  oneActionFinishAction_kajiya_hakai(a: any, b: any): any;
  getQuestKeys(a: any): any;
  getAffectAnswerKey(a: any): any;
  addAffectNonBattleAnswers(a: any): void;
  selectedAnswer(a: any, b: any): void;
  gotoQuestMap(a: any, b: any, c: any): void;
  gotoQuestMap_kantei(a: any, b: any, c: any): void;
  gotoQuestMap_guild(a: any, b: any, c: any): any;
  gotoQuestMap_ryoriya(a: any, b: any, c: any): void;
  gotoQuestMap_mahouten(a: any, b: any, c: any): any;
  gotoQuestMap_sakaba(a: any, b: any, c: any): any;
  gotoQuestMap_seishokusha(a: any, b: any, c: any): void;
  gotoQuestMap_nouka(a: any, b: any, c: any): any;
  gotoQuestMap_kyoushi(a: any, b: any, c: any): void;
  gotoQuestMap_kajiya(a: any, b: any, c: any): void;
  gotoQuestMap_shonin(a: any, b: any, c: any): any;
  gotoQuestMap_yadoya(a: any, b: any, c: any): any;
  gotoQuestMap_shinan(a: any, b: any, c: any): any;
}

declare class tGameVersion {
  parent: tGameMain;
  versions: any;
  init(a: any): void;
  checkEnableTargetSave(a: any): any;
}

declare class tGameWar {
  parent: tGameMain;
  data: any;
  fukidashi: any;
  myData: any;
  hiddenCanvases: any;
  objs: any;
  turnActionIdx: any;
  battleData: any;
  getSkillRates: any;
  buySkillRates: any;
  getSkillMax: any;
  cvs: any;
  ctx: any;
  init(a: any): void;
  initLoad(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initFrame(a: any): void;
  createMap(a: any): any;
  setObject(a: any, b: any): void;
  createUnits(a: any): any;
  createUnit(a: any): any;
  viewQuest(a: any, b: any, c: any): any;
  test(a: any): any;
  setSubFrameEvent(a: any): void;
  setSubFrameEvent_dispose(a: any): void;
  setSubFrameEvent_frame(a: any): void;
  setSubFrameEvent_draw(a: any): void;
  viewMessage(a: any): void;
  hiddenMessage(): void;
  action(a: any): any;
  getTekiTeamId(a: any): any;
  getTekiMembers(a: any): any;
  getTargetTeamMembers(a: any): any;
  getTargetTeamTypeMembers(a: any, b: any): any;
  getTargetTeamTairetsuMembers(a: any, b: any): any;
  getForwardMembers(a: any, b: any): any;
  getCharasArea(a: any): any;
  getTargetArea(a: any): any;
  action_dokugiri(a: any, b: any): void;
  turnAction_setturnmessage(a: any, b: any): any;
  turnAction_zenshin(a: any, b: any): any;
  turnAction_zenshinforce(a: any, b: any): any;
  turnAction_koutai(a: any, b: any): any;
  turnAction_taiki(a: any, b: any): any;
  turnAction_dokugiri(a: any, b: any, c: any): any;
  turnAction_shubi(a: any, b: any): any;
  turnAction_shubiforce(a: any, b: any): any;
  turnAction_kobu(a: any, b: any): any;
  turnAction_odosu(a: any, b: any): any;
  turnAction_kaihi(a: any, b: any): any;
  turnAction_taiatari(a: any, b: any): any;
  turnAction_hikiyose(a: any, b: any): any;
  turnAction_jump(a: any, b: any): any;
  turnAction_jump2(a: any, b: any): any;
  turnAction_hikiyose2(a: any, b: any): any;
  turnAction_oshidashi(a: any, b: any): any;
  turnAction_kaifuku(a: any, b: any): any;
  turnAction_zcchange(a: any, b: any): any;
  turnAction_bomb(a: any, b: any): any;
  turnAction_bomb2(a: any, b: any): any;
  turnAction_kosan(a: any, b: any): any;
  turnAction_turn(a: any, b: any): any;
  turnAction_warteki(a: any, b: any): any;
  turnAction_edgeMikataMae(a: any, b: any): any;
  turnAction_edgeTekiMae(a: any, b: any): any;
  turnAction_edgeMikataUshiro(a: any, b: any): any;
  turnAction_edgeTekiUshiro(a: any, b: any): any;
  turnAction_shikiup(a: any, b: any): any;
  turnAction_shikiup2(a: any, b: any): any;
  turnAction_meireiblock(a: any, b: any): any;
  turnAction_turnOshidashi(a: any, b: any): any;
  turnAction(a: any): any;
  createFukidashi(a: any): any;
  stopViewMessage(a: any): void;
  viewSelectSkillWindow(a: any): void;
  addTurnActions(a: any): void;
  clearMeireiStatus(a: any): void;
  tekiAct(a: any): any;
  updateShiki(): void;
  updateHP(): void;
  getCharaHP(a: any): any;
  getHP(): any;
  getFinish(): any;
  finishAction(): any;
  edgeMaeAct(a: any, b: any): void;
  addShiki(a: any, b: any): void;
  addMeireiBlock(a: any, b: any): void;
  back(a: any): void;
  setQuestData(a: any): any;
  isMeireiBlock(a: any): any;
  setBuySkillRates(): void;
  getBuySkillRateSkill(): any;
  setGetSkillRates(): void;
  getGetSkillRateSkill(): any;
  getNewSkill(a: any, b: any): any;
  setTeamStatus(a: any, b: any): any;
  getStatusTurn(a: any): any;
  getLastActionTurn(a: any): any;
  setLastActionTurn(a: any): void;
  checkLastActionTurn(a: any, b: any): any;
  checkWartekiAction(a: any, b: any): any;
  checkWartekiAction_zenshin(a: any): any;
  checkWartekiAction_koutai(a: any): any;
  checkWartekiAction_dokugiri(a: any): any;
  checkWartekiAction_shubi(a: any): any;
  checkWartekiAction_taiki(a: any): any;
  checkWartekiAction_kobu(a: any): any;
  checkWartekiAction_odosu(a: any): any;
  checkWartekiAction_shikiup(a: any): any;
  checkWartekiAction_shikiup2(a: any): any;
  checkWartekiAction_meireiblock(a: any): any;
  checkWartekiAction_zenshinforce(a: any): any;
  checkWartekiAction_shubiforce(a: any): any;
  checkWartekiAction_jump2(a: any): any;
  checkWartekiAction_bomb2(a: any): any;
  checkWartekiAction_hikiyose2(a: any): any;
  checkWartekiAction_oshidashi(a: any): any;
  checkWartekiAction_zcchange(a: any): any;
  checkWartekiAction_kaifuku(a: any): any;
  checkWartekiAction_common1(a: any): any;
  warskillkau(a: any, b: any): void;
  checkTurnOshidashi(a: any): any;
}

declare class tGameWeading {
  parent: tGameMain;
  init(a: any): void;
  view(a: any): void;
}

declare class tGameWeather {
  parent: tGameMain;
  weatherData: any;
  init(a: any): void;
  initLoad(a: any): void;
  updateWeather(a: any, b: any): any;
  setWeather(a: any, b: any, c: any): any;
  viewWeather(): void;
  viewTargetWeather(a: any): void;
}

declare class tGameWindowResource {
  parent: tGameMain;
  wcvs: any;
  wctx: any;
  windowData: any;
  init(a: any): void;
  loadWindow(a: any): void;
  createWindowFrame(a: any, b: any, c: any): any;
  createPixelWindowFrame(a: any, b: any, c: any): any;
}

declare class tGameWindows {
  parent: tGameMain;
  isEnabled: any;
  type: any;
  callObj: any;
  callBacks: any;
  bSteamBigPictureMode: any;
  init(a: any): void;
  initLoad(a: any): any;
  pageClose(): void;
  pageReload(): void;
  getSaveList(a: any): void;
  getSaveData(a: any, b: any): void;
  setSaveData(a: any, b: any, c: any): void;
  deleteSaveData(a: any, b: any): void;
  changeContentSize(a: any, b: any, c: any, d: any): void;
  sendJsSysError(a: any, b: any): void;
  exportMyAdventurerCharactor(a: any, b: any, c: any, d: any, e: any): void;
  getExportMyAdventurerCharactorK1upData(a: any, b: any, c: any, d: any, e: any): void;
  importMyAdventurerCharactor(a: any): void;
  importMyAdventurerCharactor2FromBase64Data0(a: any, b: any): void;
  overwriteMyAdventurerCharactorData(a: any, b: any, c: any, d: any, e: any, f: any): void;
  sendIsTr(): void;
  exportMpaData(a: any, b: any): void;
  importMapData(a: any): void;
  closeGame(): void;
  activeAchievement(a: any, b: any): any;
  initMydata(a: any): any;
  getControllerType(a: any): any;
  isSteamInBigPictureMode(a: any): any;
  overwriteMydataFace(a: any, b: any, c: any): void;
  overwriteMydataItem(a: any, b: any, c: any): void;
  overwriteMydataChipset(a: any, b: any, c: any): void;
  overwriteMydataTalk(a: any, b: any, c: any, d: any): void;
  getTargetImageBase64(a: any, b: any): void;
  openBrowser(a: any, b: any): void;
  outputFile(a: any, b: any): void;
  openDirectory(a: any, b: any): void;
}

declare class tGameYagi {
  parent: tGameMain;
  init(a: any): void;
  affect(a: any): any;
  tryRefresh(): any;
}

declare class tGameYubiwadukuri {
  parent: tGameMain;
  viewData: any;
  kisekiMaxNum: any;
  gineikesshoMaxNum: any;
  size: any;
  init(a: any): void;
  getKisekiMaxNum(): any;
  getGineikesshoMaxNum(): any;
  getSoukesshoNeedNum(): any;
  create(a: any, b: any, c: any): void;
  createMember(a: any, b: any, c: any): void;
  selectMaterial(a: any, b: any): void;
  selectSoukessho(a: any): any;
  getMaxRank(): any;
  actYubiwadukuri(): void;
  getExp(a: any, b: any, c: any): any;
  getSoukesshoItems(): any;
  getGineikesshoItems(): any;
}

declare class tGameYukigassen {
  parent: tGameMain;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  affect(a: any, b: any, c: any): void;
  isHoshu(): any;
  hoshu(a: any): void;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_createyukigassen(a: any, b: any): any;
}

declare var tWgm: tGameMain;

interface tFn {
  t: tDefault;
}

declare var tFn: tFn;
