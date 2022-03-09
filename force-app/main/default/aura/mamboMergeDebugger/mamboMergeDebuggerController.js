({
  toggleMamboMerge: function (component, event, helper) {
    let s = component.get('v.mergeDataString');
    let j = JSON.parse(s);
    component.set('v.mergeData', [j]);

    let showMambo = !component.get('v.showMambo');
    console.log(showMambo);
    component.set('v.showMambo', showMambo);
  }
});
