// /**
//  * Determine if a string is a palindrome
//  */

export function isPalindrome(str: string): boolean {
	const reversed = str.split('').reverse().join('');
	return reversed === str;
}

function isAnyPermutationPalindrome(str: string): boolean {
	const unmatched = new Set<string>();
	str.split('').forEach(char => {
		if (unmatched.has(char)) unmatched.delete(char);
		else unmatched.add(char);
	});
	return unmatched.size <= 1;
}