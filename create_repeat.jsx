//----------------------------------------------------------------------
// illustratorでリピートを確認する。
//----------------------------------------------------------------------
var _doc       = app.activeDocument;
var _sel       = _doc.selection;
var _layername = "リピート";
var _movement  = 960.0;

//----------------------------------------------------------------------
// Function
//----------------------------------------------------------------------
// 作業用のレイヤーを作成。
// 同名のレイヤーがあるときはそのオブジェクトを返す。
function addLayer(name){
  
  // すでにリピートレイヤーがあれば新規作成しない
  try{
    return _doc.layers.getByName(name);
  }
  catch(e){ /* 該当のレイヤーがない。 */ }

  // 新規レイヤー作成
  var obj_lay = _doc.layers.add();
  obj_lay.name = name;
  return obj_lay;
}

// リピートを取ってみる。
function createRepeat(obj, lay){
  _copyObj(obj,  1 * _movement,  1 * _movement).moveToBeginning(lay);
  _copyObj(obj,  1 * _movement, -1 * _movement).moveToBeginning(lay);
  _copyObj(obj,  1 * _movement,              0).moveToBeginning(lay);
  _copyObj(obj, -1 * _movement,  1 * _movement).moveToBeginning(lay);
  _copyObj(obj, -1 * _movement, -1 * _movement).moveToBeginning(lay);
  _copyObj(obj, -1 * _movement,              0).moveToBeginning(lay);
  _copyObj(obj,              0,  1 * _movement).moveToBeginning(lay);
  _copyObj(obj,              0, -1 * _movement).moveToBeginning(lay);
}

// オブジェクトを指定の座標分移動してコピーする
function _copyObj(obj, x, y){
  var obj_cp = obj.duplicate();
  obj_cp.translate(x, y);
  return obj_cp;
}

//----------------------------------------------------------------------
//  Main
//----------------------------------------------------------------------

// リピート作成用のレイヤーを生成
var lay = addLayer(_layername);

// 図案のリピート
for(var idx in _sel){ createRepeat(_sel[idx], lay); }

