function filtertable() { 

	var tf = new TableFilter(document.querySelector('#table'), {
		col_0: "multiple",
		col_1: "none",
		col_2: "multiple",
		col_3: "none",
		col_4: "none",
		extensions: [{ name: 'sort' }],
		clear_filter_text: "< Show all >",
		linked_filters: true,
	});
	tf.init();

}
