<?php $render = function ($data, $noDataOutput) {
function _id1($data, $noDataOutput = false, $parentCtx = [], $tagName = null, $sourceSlots = []) {
$_id1Proto = [
"filters" => [
"year" => function ($date) {
    return $date["getFullYear"]();
}
],
"computed" => [

],
"computedNames" => [

],
"tagName" => "div"
];
$html = "";
$componentCtx = [
"proto" => $_id1Proto,
"sourceSlots" => $sourceSlots,
"data" => $data ? $data : (object)["date" => new Date(431366400000)],
"owner" => $parentCtx,
"slotRenderers" => []
];
if ($data) {
$componentCtx["data"]->date = isset($componentCtx["data"]->date) ? $componentCtx["data"]->date : new Date(431366400000);
}
$computedNames = $componentCtx["proto"]["computedNames"];
foreach ($computedNames as $i => $computedName) {
  $data[$computedName] = $componentCtx["proto"]["computed"][$computedName]($componentCtx);
}
$html .= "<div";
if ((isset($componentCtx["data"]->{"class"}) ? $componentCtx["data"]->{"class"} : null)) {
$html .= San::attrFilter('class', San::escapeHTML(San::_classFilter((isset($componentCtx["data"]->{"class"}) ? $componentCtx["data"]->{"class"} : null))));
}
if ((isset($componentCtx["data"]->{"style"}) ? $componentCtx["data"]->{"style"} : null)) {
$html .= San::attrFilter('style', San::escapeHTML(San::_styleFilter((isset($componentCtx["data"]->{"style"}) ? $componentCtx["data"]->{"style"} : null))));
}
if ((isset($componentCtx["data"]->{"id"}) ? $componentCtx["data"]->{"id"} : null)) {
$html .= San::attrFilter('id', San::escapeHTML((isset($componentCtx["data"]->{"id"}) ? $componentCtx["data"]->{"id"} : null)));
}
$html .= ">";
if (!$noDataOutput) {
$html .= "<!--s-data:" . json_encode($componentCtx["data"], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "-->";
}
$html .= "<b";
if ((isset($componentCtx["data"]->{"date"}) ? $componentCtx["data"]->{"date"} : null)) {
$html .= San::attrFilter('title', San::escapeHTML(San::callFilter($componentCtx, "year", [(isset($componentCtx["data"]->{"date"}) ? $componentCtx["data"]->{"date"} : null)])));
}
$html .= ">";
$html .= San::escapeHTML(San::callFilter($componentCtx, "year", [(isset($componentCtx["data"]->{"date"}) ? $componentCtx["data"]->{"date"} : null)]));
$html .= "</b></div>";
return $html;
};
return call_user_func("_id1", $data, $noDataOutput);
}; ?>