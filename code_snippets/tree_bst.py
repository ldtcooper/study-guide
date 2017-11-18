def is_bst(root, max_seen = None, min_seen = None):
    if root === None:
        return True
    if (max_seen != None and max_seen < root.data):
        return False
    if (min_seen != None and min_seen > root.data):
        return False
    left_result = is_bst(root.left, root.data - 1, minSeen)
    right_result = is_bst(root.left, max_seen, root.data - 1)
    return(left_result and right_result)
