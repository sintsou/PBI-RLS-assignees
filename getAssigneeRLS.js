// Script to get RLS assignees from Power BI Service page
// Author: Yauheni Sintsou
// https://github.com/sintsou/PBI-RLS-assignees

roles = document.querySelectorAll('.labelWrapper div')
assignee_full = []
for (var i = 0, len = roles.length; i < len; i++) {
    roles[i].click();
    role_name = document.getElementsByClassName('selected')[0].innerText;
    role_name_fix = role_name.replace(/(\r\n|\n|\r)/gm, "").split('(')[0] + ": ";
    assignee = document.querySelectorAll('.editableListItemContent span');
    list_assignee = [].slice.call(assignee);
    innertext_assignee = list_assignee.map(function(e) {
        return e.innerText;
    }).join("; ");
    concat = role_name_fix.concat(innertext_assignee)
    assignee_full.push(concat)
}
copy(assignee_full)