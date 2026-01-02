// Helper functions for checking permissions

export type ModuleKey = 'dashboard' | 'clients' | 'documents' | 'invoices' | 'cashflow' | 'administration'

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
