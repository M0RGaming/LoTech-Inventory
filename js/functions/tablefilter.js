function filtertable() { 

	var tf = new TableFilter(document.querySelector('#table'), {
		col_0: "select",
		col_1: "none",
		col_2: "select",
		col_3: "none",
		col_4: "none",
		extensions: [{ name: 'sort' }],
		clear_filter_text: "< Show all >",
	});
	tf.init();

}