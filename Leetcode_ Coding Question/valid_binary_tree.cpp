class Solution {
public:
    vector<int> v;
     void inOrder(TreeNode* root){
         if(root){
             inOrder(root->left);
             v.push_back(root->val);
             inOrder(root->right);
         }
     }
    
    bool isValidBST(TreeNode* root) {
        if(root){
            inOrder(root);
            for(int i=1;i<v.size();i++){
                if(v[i]<=v[i-1]){
                    return false;
                }
            }
            return true;
        }
        return true;
    }
};