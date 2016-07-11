/* Adds the specified class(es) to each of the set of matched SVG elements.
 * .addClassSVG( className )
 * @param {String} className   One or more space-separated classes to be added to the class attribute of each matched element. */
$.fn.addClassSVG = function(className){
	if (arguments.length !== 0 && className !== "") {
		$(this).removeClassSVG(className);
		$(this).attr("class", function(index, existingClassNames) {
			return existingClassNames + " " + className;
		});
	}
	return this;
};

/*  Determine whether any of the matched elements are assigned the given class.
 * .hasClassSVG( className )
 * @param {String} className   The class name to search for.
 * @returns {Boolean} */
$.fn.hasClassSVG = function(className){
	var bFound = false;
	$(this).each(function(index) {
		var sExistingClassNames = $(this).attr('class');
		if (sExistingClassNames !== undefined && sExistingClassNames.indexOf(className) !== -1) {
			bFound = true;
			return false; // stop the loop
		}
	});
	return bFound;
};

/* Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * If a class name is included as a parameter, then only that class will be removed from the set of matched elements. If no class
 * names are specified in the parameter, all classes will be removed.
 * .removeClassSVG( [className ] )
 * @param {String} className   One or more space-separated classes to be removed from the class attribute of each matched element. */
$.fn.removeClassSVG = function(className){
	if (arguments.length === 0) {
		$(this).attr('class', function(index, existingClassNames) {
			return "";
		});
	} else {
		$(this).attr('class', function(index, existingClassNames) {
			if (existingClassNames === undefined) {
				return "";
			} else {
				var sResult = existingClassNames;
				var aClassName = className.split(" ");
				for (var i = 0; i < aClassName.length; i++) {
					sResult = sResult.replace(aClassName[i], "");
				}
				return sResult;
			}
		});
	}
	return this;
};

/*  Add or remove one class from each element in the set of matched elements, depending on the class's presence.
 * .toggleClassSVG( className )
 * @param {String} className   One class name to be toggled for each element in the matched set. */
$.fn.toggleClassSVG = function(className){
	$(this).attr('class', function(index, existingClassNames) {
		if (existingClassNames === undefined) {
			return className;
		} else if( existingClassNames.indexOf(className) === -1) {
			return existingClassNames + " " + className;
		} else {
			var sResult = existingClassNames;
			sResult = sResult.replace(className, "");
			return sResult;
		}
	});
	return this;
};
