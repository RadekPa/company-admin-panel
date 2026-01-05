// Helper functions for checking permissions

export type ModuleKey = 
  | 'dashboard' 
  | 'authors' 
  | 'clients' 
  | 'documents' 
  | 'invoices' 
  | 'cashflow' 
  | 'users' 
  | 'permissions' 
  | 'languages'
  | 'administration'

export type RolePermissionsMap = Record<ModuleKey, {
  userAccess: boolean
  advancedAccess: boolean
  adminAccess: boolean
}>

// Check if user has access to a module based on their role and permissions matrix
export function hasModuleAccess(
  moduleKey: ModuleKey, 
  userRole: 'USER' | 'ADVANCED' | 'ADMIN',
  permissions: RolePermissionsMap
): boolean {
  // Admin always has access to everything
  if (userRole === 'ADMIN') return true
  
  // For nested modules, check both the specific module and the parent 'administration' module
  if (['users', 'permissions', 'languages'].includes(moduleKey)) {
    const specificPerm = permissions[moduleKey]
    const adminPerm = permissions['administration']
    
    if (!specificPerm && !adminPerm) return false
    
    // If specific permission exists, use it; otherwise fall back to administration
    const perm = specificPerm || adminPerm
    
    if (userRole === 'ADVANCED') {
      return perm.advancedAccess
    }
    
    if (userRole === 'USER') {
      return perm.userAccess
    }
  }
  
  // For nested authors/clients, check both specific and parent 'clients' module
  if (moduleKey === 'authors') {
    const authorsPerm = permissions['authors']
    const clientsPerm = permissions['clients']
    
    if (!authorsPerm && !clientsPerm) return false
    
    const perm = authorsPerm || clientsPerm
    
    if (userRole === 'ADVANCED') {
      return perm.advancedAccess
    }
    
    if (userRole === 'USER') {
      return perm.userAccess
    }
  }
  
  const modulePerm = permissions[moduleKey]
  if (!modulePerm) return false
  
  if (userRole === 'ADVANCED') {
    return modulePerm.advancedAccess
  }
  
  if (userRole === 'USER') {
    return modulePerm.userAccess
  }
  
  return false
}
